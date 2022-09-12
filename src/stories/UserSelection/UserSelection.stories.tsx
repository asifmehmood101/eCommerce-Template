import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { UserSelection } from "./UserSelection";

const MockData = ["Hadi", "Ana", "aysha", "ammi", "asif", "faisal"];

export default {
    title: "userACtion/UserSelection",
    component: UserSelection,
} as ComponentMeta<typeof UserSelection>;

const Template: ComponentStory<typeof UserSelection> = (args) => <UserSelection {...args} />;

export const DropDown = Template.bind({});

DropDown.args = {
    label: "testing",
    listOfData: MockData,
};
