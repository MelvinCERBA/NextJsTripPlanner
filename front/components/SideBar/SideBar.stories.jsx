import React from "react";
import { SideBar } from "./SideBar";

export default {
  title: "Components/SideBar",
  component: SideBar,
};

const Template = (args) => <SideBar {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
