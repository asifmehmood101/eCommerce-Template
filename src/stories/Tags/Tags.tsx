import React from "react";
import { Link, LinkProps, Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import { CloseRounded as CloseRoundedIcon } from "@mui/icons-material";

type LinkPropsTypes = LinkProps & {
    hasPadding: boolean;
    hasIcon: boolean;
};

interface TagsType {
    hasPadding: boolean;
}

const StyedTagContainer = styled(Box)<TagsType>(({ hasPadding, theme }) => ({
    display: "inline-block",
    padding: hasPadding ? "2px 10px" : "1px 8px",
    borderRadius: "12px",
    border: "1px solid red",
    color: theme.palette.primary[main],
}));

const StyledTags = styled(Link)({
    display: "inline-block",
    fontFamily: "Poppins",
    fontSize: "0.8rem",
    fontWeight: 600,
    lineHeight: "18px",
    color: "inherit",
});

const StyledCloseButton = styled(Button)({
    padding: "0",
    minWidth: "14px",
    marginLeft: "5px",
    color: "inherit",
});

export function Tags({ href, target, underline, children, variant, hasPadding, hasIcon, color, ...rest }: LinkPropsTypes) {
    const [openTag, setOpenTag] = React.useState(true);

    const closeTagHandler = () => setOpenTag(false);

    if (openTag) {
        return (
            <StyedTagContainer hasPadding={hasPadding}>
                <StyledTags href={href} target={target} variant={variant} underline={underline} {...rest} color={color}>
                    {children}
                </StyledTags>
                {hasIcon && (
                    <StyledCloseButton onClick={closeTagHandler}>
                        <CloseRoundedIcon fontSize="inherit" />
                    </StyledCloseButton>
                )}
            </StyedTagContainer>
        );
    }
}
