import { GeoMap as Component } from "./GeoMap";
import React from "react";

export default {
  title: "Components/GeoMap",
  component: Component,
};

const Template = (args) => <Component {...args} />;

export const GeoMap = Template.bind({});
GeoMap.storyName = "GeoMap";
