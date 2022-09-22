import React from "react";
import { Checkbox, CheckboxProps, FormControlLabel, FormControlLabelProps, Rating } from "@mui/material";
import { styled } from "@mui/system";
import { KeyboardDoubleArrowRightSharp } from "@mui/icons-material";

type checkBoxPropsType = CheckboxProps &
    FormControlLabelProps & {
        value: string | number | unknown;
        checkedValue: boolean;
        checkHandler: () => void;
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

export function CheckBox({
    label = <Rating readOnly defaultValue={2.5} precision={0.5} />,
    value,
    checkedValue,
    checkHandler,
    ...rest
}: checkBoxPropsType) {
    const [labelStyle, setLabelStyle] = React.useState(false);

    const LabelStyleHandler = (event: React.SyntheticEvent<Element, Event>, checked: boolean) => setLabelStyle(checked);

    return (
        <>
            <StyledCheckboxContainer
                control={<Checkbox checked={checkedValue} value={value} {...rest} onClick={checkHandler} />}
                label={label}
                checkedValue={labelStyle}
                onChange={LabelStyleHandler}
            />
        </>
    );
}
