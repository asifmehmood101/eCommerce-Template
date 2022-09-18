import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Tags } from "./Tags";

export default {
    title: "userAction/Tags",
    component: Tags,
} as ComponentMeta<typeof Tags>;

const Template: ComponentStory<typeof Tags> = (args) => <Tags {...args} />;

export const Tag = Template.bind({});
Tag.args = {
    children: "tags",
    href: "www.google.com",
    target: "_blank",
    underline: "none",
    variant: "h1",
    hasIcon: false,
};
