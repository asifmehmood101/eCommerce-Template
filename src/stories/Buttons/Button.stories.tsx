import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Buttons";

export default {
    title: "UserAction/Buttons",
    component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    variant: "outlined",
    size: "small",
    label: "Button",
};
