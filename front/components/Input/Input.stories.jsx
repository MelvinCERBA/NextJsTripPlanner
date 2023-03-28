import React from "react";
import { Input } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: { control: "radio", options: ["search", "text", "number"] },
    name: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    name: "test-name",
  },
};

const Template = (args) => <Input {...args} />;

export const Search = Template.bind({});
Search.args = {
  type: "search",
  placeholder: "Entrez ici",
  label: "Label",
};

export const Text = Template.bind({});
Text.args = {
  type: "text",
  placeholder: "Entrez ici",
  label: "Label",
};

export const Number = Template.bind({});
Number.args = {
  type: "number",
  placeholder: "Entrez ici",
  label: "Label",
};
