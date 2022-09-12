import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UserInput } from "./UserInput";

export default {
    title: "InputField/userInput",
    component: UserInput,
} as ComponentMeta<typeof UserInput>;

const Template: ComponentStory<typeof UserInput> = (args) => <UserInput {...args} />;

export const FirstNameInput = Template.bind({});

FirstNameInput.args = {
    label: "First name",
    placeholder: "First name",
    type: "text",
};
