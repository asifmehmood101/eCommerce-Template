import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { FilterSearch } from "./FilterSearch";

const MockData = ["All categories", "Fruit", "Vegetable", "Furniture"];

export default {
    title: "userAction/UserSelection",
    component: FilterSearch,
} as ComponentMeta<typeof FilterSearch>;

const Template: ComponentStory<typeof FilterSearch> = (args) => <FilterSearch {...args} />;

export const FilterSearchDemo = Template.bind({});

FilterSearchDemo.args = {
    listOfData: MockData,
};
