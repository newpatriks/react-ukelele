import React from 'react'
import PropTypes from 'prop-types'
import { HEAD_STOCK_OFFSET } from "./ukelele-chords.js";

function UkeStrings({ stringYPosition, width }) {
  return ([
    <line
      key="string-1"
      x1={HEAD_STOCK_OFFSET * 2}
      y1={stringYPosition[0]}
      x2={width}
      y2={stringYPosition[0]}
      stroke="black"
      strokeWidth={1}
    />,
    <line
      key="string-2"
      x1={HEAD_STOCK_OFFSET * 2}
      y1={stringYPosition[1]}
      x2={width}
      y2={stringYPosition[1]}
      stroke="black"
      strokeWidth={1}
    />,
    <line
      key="string-3"
      x1={HEAD_STOCK_OFFSET * 2}
      y1={stringYPosition[2]}
      x2={width}
      y2={stringYPosition[2]}
      stroke="black"
      strokeWidth={1}
    />,
    <line
      key="string-4"
      x1={HEAD_STOCK_OFFSET * 2}
      y1={stringYPosition[3]}
      x2={width}
      y2={stringYPosition[3]}
      stroke="black"
      strokeWidth={1}
    />
  ])
}

UkeStrings.propTypes = {
  stringYPosition: PropTypes.array,
  width: PropTypes.string
}

export default UkeStrings;