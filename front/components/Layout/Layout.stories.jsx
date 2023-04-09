import React from "react";
import { Layout } from "./Layout";

export default {
  title: "Components/Layout",
  component: Layout,
  args: {
    children: "JSX Children",
  },
};

const Template = (args) => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "Title",
  description: "Description",
};
