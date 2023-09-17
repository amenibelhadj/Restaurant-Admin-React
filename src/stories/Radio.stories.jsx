import React from "react";
import { Radio } from "components";

export default {
  title: "restaurant_admin/Radio",
  component: Radio,
};

export const SampleRadio = (args) => <Radio {...args} />;

SampleRadio.args = { label: "Radio", inputClassName: "mr-1" };
