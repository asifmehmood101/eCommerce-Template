import React from "react";
import { Card, CardProps, CardContent, CardMedia, Typography, CardActions, Rating, Box } from "@mui/material";
import { Button } from "../Buttons/Buttons";
import { styled } from "@mui/system";
import { productsType } from "../../MockData/Products";

type ProductMiniCardType = CardProps & productsType;

interface PriceType {
    discount?: number;
}

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
        marginTop: "10px",
        justifyContent: "space-between",
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
    ".MuiRating-root": {
        marginTop: "10px",
        marginLeft: "-2px",
        color: theme.palette.tertiary["main"],
    },
}));

const StyledPriceWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column-reverse",
}));

const StyledPrice = styled(Box)<PriceType>(({ theme, discount }) => ({
    fontFamily: "Poppins",
    fontSize: discount ? "12px" : "18px",
    fontWeight: 600,
    lineHeight: discount ? "18px" : "27px",
    color: discount ? theme.palette.tertiary["lighter"] : theme.palette.tertiary["main"],
    textDecoration: discount ? "line-through" : "normal",
}));

const StyledAfterPrice = styled(Box)<PriceType>(({ theme, discount }) => ({
    fontFamily: "Poppins",
    fontSize: discount ? "18px" : "12px",
    fontWeight: 600,
    lineHeight: discount ? "27px" : "18px",
    color: discount ? theme.palette.tertiary["main"] : theme.palette.tertiary["lighter"],
}));

export function ProductMiniCard({ name, description, Image, rating, discount, price, ...rest }: ProductMiniCardType) {
    const { imageAlt, imageSrc } = Image;

    const discountedPrice = Math.round((+discount / 100) * price);
    const afterDiscountPrice = price - discountedPrice;

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
                    {rating && <Rating readOnly value={rating} precision={0.5} max={5} />}
                </CardContent>
                <CardActions>
                    <StyledPriceWrapper component="div">
                        <StyledPrice component="span" discount={discount}>
                            {price}$
                        </StyledPrice>
                        {discount && (
                            <StyledAfterPrice component="span" discount={discount}>
                                {afterDiscountPrice}$
                            </StyledAfterPrice>
                        )}
                    </StyledPriceWrapper>
                    <Button size="small" variant="contained">
                        Buy now
                    </Button>
                </CardActions>
            </StyledCard>
        </React.Fragment>
    );
}
