import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CheckBox } from "./CheckBox";

export default {
    title: "userAction/CheckBox",
    component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => <CheckBox {...args} />;

export const CheckBoxes = Template.bind({});
CheckBoxes.args = {};
