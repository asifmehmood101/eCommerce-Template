import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ProductMiniCard } from "./ProductMiniCard";

export default {
    title: "userAction/ProductMiniCard",
    component: ProductMiniCard,
} as ComponentMeta<typeof ProductMiniCard>;

const Template: ComponentStory<typeof ProductMiniCard> = (args) => <ProductMiniCard {...args} />;

export const ProductMiniCardDemo = Template.bind({});

ProductMiniCardDemo.args = {
    name: "Product title",
    description: "Space for a small product description ",
    Image: {
        imageSrc: "https://unsplash.com/photos/aaxOG66ctCU ",
        imageAlt: "food",
    },
    rating: 2.5,
    price: 200,
    discount: 28,
};
