import React from "react";
import { Checkbox, CheckboxProps, FormControlLabel, FormControlLabelProps } from "@mui/material";
import { styled } from "@mui/system";

type checkBoxPropsType = CheckboxProps &
    FormControlLabelProps & {
        label: string | number;
        value: string | number | unknown;
        checkedValue: boolean;
    };

interface FormControlLabelPropsType {
    checkedValue: boolean;
}

const StyledCheckboxContainer = styled(FormControlLabel)<FormControlLabelPropsType>(({ theme, checkedValue }) => ({
    ".MuiFormControlLabel-label": {
        fontFamily: "Poppins",
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: "19px",
        color: checkedValue ? theme.palette.tertiary["main"] : theme.palette.tertiary["light"],
        transition: "all 0.3s",
    },
}));

export function CheckBox({ label = "HELLO", value, checkedValue, ...rest }: checkBoxPropsType) {
    const [labelStyle, setLabelStyle] = React.useState(false);

    const LabelStyleHandler = (event: React.SyntheticEvent<Element, Event>, checked: boolean) => setLabelStyle(checked);

    return (
        <>
            <StyledCheckboxContainer
                control={<Checkbox checked={checkedValue} value={value} {...rest} />}
                label={label}
                checkedValue={labelStyle}
                onChange={LabelStyleHandler}
            />
        </>
    );
}