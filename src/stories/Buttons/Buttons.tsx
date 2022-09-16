import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/system";

interface ButtonPropsType {
    variant: string;
    size: string;
    ButtonDisabled?: boolean;
    eventHandler?: () => void;
    href?: string;
    color?: string;
    label: string;
}

// styles

const ButtonStyle = styled(Button)(({ theme, color, variant }) => ({
    // border: "2px solid #46760A",
    borderRadius: "12px",
    fontFamily: "Poppins",
    fontSize: "0.9rem",
    fontWeight: 700,
    lineHeight: "23px",
    backgroundColor:
        color === "secondary"
            ? variant === "contained"
                ? theme.palette.secondary.main
                : "transparent"
            : variant === "contained"
            ? theme.palette.primary.main
            : "transparent",
    color: variant === "contained" ? (color === "secondary" ? "#151515" : "#fff") : "#151515",
    boxShadow: "none",
}));

export function Buttons({ variant, ButtonDisabled, eventHandler, size, href, color, label, type }: ButtonPropsType & ButtonProps) {
    return (
        <ButtonStyle variant={variant} disabled={ButtonDisabled} onClick={eventHandler} size={size} href={href} color={color} type={type}>
            {label}
        </ButtonStyle>
    );
}
