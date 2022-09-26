import React from "react";
import { Box, Select, MenuItem, InputBase, Divider } from "@mui/material";
import { styled } from "@mui/system";
import { Button } from "../Buttons/Buttons";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import SearchIcon from "@mui/icons-material/Search";

type selectValueType = number | string | Date;
type listOfDataType = number[] | string[];

interface UserChildContainerType {
    flexRowDirections?: boolean;
}

interface UserSelectionPropsType {
    selectValue: selectValueType;
    selectValueHandler: () => void;
    listOfData: listOfDataType;
}

// styling

const UserSelectionContainer = styled(Box)<UserChildContainerType>(({ flexRowDirections }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    border: "1px solid #D1D1D1",
    borderRadius: "12px",
    padding: "6px 0 6px 16px",
}));

const UserSelectionStyle = styled(Select)(({ theme }) => ({
    fontFamily: " Poppins",
    fontSize: "15px",
    fontWeight: 700,
    lineHeight: "18px",
    ".MuiSelect-select": {
        display: "flex",
        alignItems: "center",
        padding: "0",
    },
    ".MuiSelect-iconOutlined": {
        fontSize: "20px",
        color: theme.palette.primary["main"],
    },

    fieldset: { border: "0" },
}));

const UserSelectionitemStyled = styled(MenuItem)({
    fontFamily: " Poppins",
    fontSize: "15px",
    color: "#151515",
});

const UserSearchInput = styled(InputBase)(({ theme }) => ({
    ".MuiInputBase-input": {
        padding: "0",
        marginLeft: "24px",
    },
}));

const StyledSearchIcon = styled(SearchIcon)(({ theme }) => ({
    fill: theme.palette.tertiary["main"],
    transform: "rotate(90deg) scale(1.2)",
}));

export function FilterSearch({ selectValue, selectValueHandler, listOfData }: UserSelectionPropsType) {
    return (
        <UserSelectionContainer>
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
            <Divider orientation="vertical" flexItem />
            <UserSearchInput placeholder="Search Products, categories ..." fullWidth />
            <Button endIcon={<StyledSearchIcon />} />
        </UserSelectionContainer>
    );
}
