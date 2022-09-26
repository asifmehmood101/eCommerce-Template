import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import { styled } from "@mui/system";

// types intersection
type FullButtonType = ButtonProps & {
    label?: string;
};

// styles
const StyledButton = styled(MuiButton)(({ color, variant }) => ({
    borderRadius: "12px",
    fontFamily: "Poppins",
    fontSize: "0.8rem",
    fontWeight: 700,
    lineHeight: "23px",
    color: variant === "contained" ? (color === "secondary" ? "#151515" : "#fff") : "#151515",
    boxShadow: "none",
    "&:hover": {
        boxShadow: "none",
        background: "transparent",
    },

    "&:focus": {
        boxShadow: "none",
    },
}));

export function Button({ variant, size, href, color, label, type, disabled, startIcon, endIcon, onClick }: FullButtonType) {
    return (
        <StyledButton
            variant={variant}
            disabled={disabled}
            size={size}
            href={href}
            color={color}
            type={type}
            startIcon={startIcon}
            endIcon={endIcon}
            onClick={onClick}
            disableRipple
        >
            {label}
        </StyledButton>
    );
}
