import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Buttons } from "./Buttons";

export default {
    title: "UserAction/Buttons",
    component: Buttons,
} as ComponentMeta<typeof Buttons>;

const Template: ComponentStory<typeof Buttons> = (args) => <Buttons {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    variant: "outlined",
    size: "small",
    label: "Button",
};
