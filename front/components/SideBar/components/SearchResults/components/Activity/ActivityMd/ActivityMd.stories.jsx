import React from "react";
import { Activity } from "./ActivityMd";

export default {
  title: "Components/Activity",
  component: Activity,
};

const Template = (args) => <Activity {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
