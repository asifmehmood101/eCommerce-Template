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

const StyedTagContainer = styled(Box)<TagsType>(({ hasPadding }) => ({
    display: "inline-block",
    padding: hasPadding ? "4px 10px" : "",
}));

const StyledTags = styled(Link)({
    display: "inline-block",
    fontFamily: "Poppins",
    fontSize: "0.8rem",
    fontWeight: 600,
    lineHeight: "18px",
});

const StyledCloseButton = styled(Button)({
    padding: "0",
    minWidth: "14px",
    marginLeft: "5px",
});

export function Tags({ href, target, underline, children, variant, hasPadding, hasIcon, ...rest }: LinkPropsTypes) {
    const [closeTag, setCloseTag] = React.useState(true);

    const closeTagHandler = () => setCloseTag(false);

    if (closeTag) {
        return (
            <StyedTagContainer hasPadding={hasPadding}>
                <StyledTags href={href} target={target} variant={variant} underline={underline} {...rest}>
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
