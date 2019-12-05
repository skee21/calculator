import React from "react";

export const NumButton = ({ value, onClick, ...rest }) => (
  <input type="button" value={value} onClick={() => onClick(value)} {...rest} />
);
