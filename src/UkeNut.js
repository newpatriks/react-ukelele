import React from "react";
import PropTypes from 'prop-types';
import { HEAD_STOCK_OFFSET } from "./ukelele-chords.js";

function UkeNut({ stringYPosition, stringHeight }) {
  return (<rect
    x={HEAD_STOCK_OFFSET}
    y={stringYPosition}
    width={HEAD_STOCK_OFFSET}
    height={stringHeight}
    fill="transparent"
    stroke="black"
    strokeWidth={1}
  />)
}

UkeNut.propTypes = {
  stringYPosition: PropTypes.string,
  stringHeight: PropTypes.string
}

export default UkeNut


