import { Text } from "./Text";
import React from "react";

export default {
  title: "Components/Text",
  component: Text,
};

const Template = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  h1: "Texte écrit en H1",
  h2: "Texte écrit en H2",
  h3: "Texte écrit en H3",
  h4: "Texte écrit en H4",
  h5: "Texte écrit en H5",
  h6: "Texte écrit en H6",
};
