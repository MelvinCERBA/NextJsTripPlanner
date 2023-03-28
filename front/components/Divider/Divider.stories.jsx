import { Divider } from "./Divider";
import React from "react";

export default {
  title: "Components/Divider",
  component: Divider,
  argTypes: {
    type: { control: "radio", options: ["horizontal", "vertical"] },
  },
};

const Template = (args) => <Divider {...args} />;

export const Vertical = Template.bind({});
Vertical.args = {
  type: "vertical",
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  type: "horizontal",
};
