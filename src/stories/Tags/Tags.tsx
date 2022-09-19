import React from "react";
import { Link, LinkProps, Box, Button } from "@mui/material";
import { styled } from "@mui/system";
import { CloseRounded as CloseRoundedIcon } from "@mui/icons-material";

type tagTypeProps = "primary" | "secondary" | "tertiary";

type LinkPropsTypes = LinkProps & {
    hasIcon: boolean;
    TagType: tagTypeProps;
};

interface TagsType {
    TagType: tagTypeProps;
}

const StyedTagContainer = styled(Box)<TagsType>(({ theme, TagType }) => ({
    display: "inline-block",
    padding: "2px 8px",
    borderRadius: "12px",
    backgroundColor:
        TagType === "primary" ? theme.palette.primary["light"] : TagType === "secondary" ? theme.palette.secondary["main"] : "transparent",
    border: TagType === "tertiary" ? "1px solid #EBEBEB" : "",
    color: TagType === "primary" ? theme.palette.primary["main"] : "#151515",
}));

const StyledTags = styled(Link)({
    display: "inline-block",
    fontFamily: "Poppins",
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "18px",
    color: "inherit",
});

const StyledCloseButton = styled(Button)({
    padding: "0",
    minWidth: "14px",
    marginLeft: "5px",
    opacity: "0.7",
    color: "inherit",
    fontWeight: 700,
});

export function Tags({ href, target, underline, children, variant, hasIcon, TagType, color, ...rest }: LinkPropsTypes) {
    const [openTag, setOpenTag] = React.useState(true);

    const closeTagHandler = () => setOpenTag(false);

    if (openTag) {
        return (
            <StyedTagContainer TagType={TagType}>
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
