import { NavBar } from "./NavBar";
import React from "react";

export default {
  title: "Components/NavBar",
  component: NavBar,
};

const Template = (args) => <NavBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
