import React from "react";
import { Card, CardProps, CardContent, CardMedia, Typography, CardActions } from "@mui/material";
import { Button } from "../Buttons/Buttons";
import { styled } from "@mui/system";
import { productsType } from "../../MockData/Products";

type ProductMiniCardType = CardProps & productsType;

const StyledCard = styled(Card)<CardProps>(({ theme, variant }) => ({
    maxWidth: "240px",
    borderRadius: "12px",
    padding: "16px 16px 16px 16px",
    boxShadow: variant === "elevation" ? "none" : "none",
    img: {
        backgroundColor: "#F9F9F9",
        borderRadius: "12px",
        height: "180px",
    },

    ".MuiCardContent-root": {
        padding: "0",
        marginTop: "16px",
    },

    ".MuiCardActions-root": {
        padding: "0",
        marginTop: "14px",
    },

    ".MuiTypography-h5": {
        fontFamily: "Poppins",
        textTransform: "capitalize",
        fontSize: "15px !important",
        fontWeight: 500,
        lineHeight: "23px !important",
        marginBottom: "4px !important",
        color: theme.palette.tertiary["main"],
    },

    p: {
        fontFamily: "Poppins",
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "16px",
        color: theme.palette.tertiary["light"],
    },
}));

export function ProductMiniCard({ name, description, Image, ...rest }: ProductMiniCardType) {
    const { imageAlt, imageSrc } = Image;

    console.log(imageAlt);
    return (
        <React.Fragment>
            <StyledCard {...rest}>
                <CardMedia component="img" src={imageSrc} alt={imageAlt} />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" variant="contained">
                        Buy now
                    </Button>
                </CardActions>
            </StyledCard>
        </React.Fragment>
    );
}
