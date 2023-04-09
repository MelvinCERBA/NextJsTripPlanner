import { Map } from "./Map";

export default {
  title: "Components/Map",
  component: Map,
};

const Template = (args) => <Map {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
