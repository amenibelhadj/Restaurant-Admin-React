import React from "react";

import { SelectBox } from "components";

export default {
  title: "restaurant_admin/SelectBox",
  component: SelectBox,
  argTypes: {
    options: {
      table: {
        disable: true,
      },
    },
    value: {
      table: {
        disable: true,
      },
    },
  },
};

export const SampleSelectbox = (args) => <SelectBox {...args} />;

SampleSelectbox.args = {
  placeholder: "Select",
  shape: "CircleBorder15",
  variant: "OutlineBlue50",
  size: "xs",
  className: "w-[300px]",
};
