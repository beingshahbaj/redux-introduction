import React from "react";
import { IINCREASE, DECREASE, RESET } from "./ActionTypes";

export const increase = (value = 1) => {
  return {
    type: IINCREASE,
    value: value,
  };
};

export const decrease = (value = 1) => {
  return {
    type: DECREASE,
    value: value,
  };
};

export const reset = (value = 1) => {
  return {
    type: RESET,
    value: value,
  };
};
