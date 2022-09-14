import React from "react";
import { Box, Select, MenuItem } from "@mui/material";
import { styled } from "@mui/system";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

type selectValueType = number | string | Date;
type listOfDataType = number[] | string[];

interface userSelectionType {
    flexRowDirections?: boolean;
}

interface UserChildContainerType {
    flexRowDirections?: boolean;
}

interface UserSelectionPropsType {
    selectValue: selectValueType;
    selectValueHandler: () => void;
    listOfData: listOfDataType;
    children?: React.ReactNode;
    flexRowDirection?: boolean;
}

// styling

const UserSelectionContiner = styled(Box)<UserChildContainerType>(({ flexRowDirections }) => ({
    display: "inline-flex",
    alignItems: "center",
    flexDirection: flexRowDirections ? "row-reverse" : "row",
    gap: flexRowDirections ? "16px" : "0",
    border: "1px solid #D1D1D1",
    borderRadius: "12px",
    padding: "10px 0 10px 16px",
}));

const UserSelectionStyle = styled(Select)({
    fontFmily: " Poppins",
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "18px",
    ".MuiSelect-select": {
        padding: "0",
    },
    ".MuiSelect-iconOutlined": {
        width: "22px",
        height: "22px",
        color: "#151515",
    },

    fieldset: { border: "0" },
});

const UserSelectionitemStyled = styled(MenuItem)({
    fontFmily: " Poppins",
    fontSize: "12px",
    color: "#151515",
});

const UserChildContainer = styled(Box)<userSelectionType>(({ flexRowDirections }) => ({
    display: "inline-block",
    borderRight: flexRowDirections ? "1px solid #D1D1D1" : "0",
    paddingRight: "16px",
    borderLeft: flexRowDirections ? "0" : "1px solid #D1D1D1",
    paddingLeft: flexRowDirections ? "0" : "16px",
}));

export function UserSelection({ selectValue, selectValueHandler, listOfData, children, flexRowDirection }: UserSelectionPropsType) {
    return (
        <UserSelectionContiner component="div" flexRowDirections={flexRowDirection}>
            <UserSelectionStyle
                id="select"
                defaultValue={listOfData[0]}
                value={selectValue}
                onChange={selectValueHandler}
                IconComponent={KeyboardArrowDownOutlinedIcon}
            >
                {listOfData.map((data, index) => {
                    return (
                        <UserSelectionitemStyled key={index} value={data}>
                            {data}
                        </UserSelectionitemStyled>
                    );
                })}
            </UserSelectionStyle>
            <UserChildContainer flexRowDirections={flexRowDirection}>{"hello"}</UserChildContainer>
        </UserSelectionContiner>
    );
}
