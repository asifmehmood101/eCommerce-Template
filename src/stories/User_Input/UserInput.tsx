import React from "react";
import { TextField, Box } from "@mui/material";
import { styled } from "@mui/system";

// props Types
interface userInputTypes {
    placeholder: string;
    type: string;
    defaultValue?: string | number;
    label: string;
    inputValue: string | number;
    UserInputHandler: () => void;
}

// styles
const InputContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
});

const InputLabel = styled(Box)({
    fontFamily: "Poppins",
    display: "block",
    textTransform: "capitalize",
    fontWeight: 600,
    fontSize: "12px",
    lineHeight: "18px",
});

const UserInputField = styled(TextField)({
    display: "block",
    transition: "0.3s all",
    background: "#F9F9F9",

    input: {
        padding: "10px 16px 10px 21px",
        color: "#A9A9A9",
        fontWeight: "400",
        fontSize: "14px",
        lineHeight: "19px",
        border: "2px solid #D1D1D1",
        borderRadius: "12px",
    },

    fieldset: { borderRadius: "12px" },
});

export function UserInput({ placeholder, type, defaultValue, label, UserInputHandler, inputValue }: userInputTypes) {
    return (
        <InputContainer component="div">
            <InputLabel component="label">{label}</InputLabel>
            <UserInputField
                value={inputValue}
                type={type}
                id="outlined-basic"
                hiddenLabel
                placeholder={placeholder}
                variant="outlined"
                defaultValue={defaultValue}
                fullWidth
                onChange={UserInputHandler}
            />
        </InputContainer>
    );
}
