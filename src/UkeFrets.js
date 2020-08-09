import React from 'react'
import PropTypes from 'prop-types'
import { VERTICAL_OFFSET } from "./ukelele-chords.js";

function UkeFrets({ fretXPosition, stringHeight }) {
  return [
    <line
      key="fret-1"
      x1={fretXPosition[0]}
      y1={VERTICAL_OFFSET}
      x2={fretXPosition[0]}
      y2={stringHeight + VERTICAL_OFFSET}
      stroke="black"
      strokeWidth={0.5}
    />,
    <line
      key="fret-2"
      x1={fretXPosition[1]}
      y1={VERTICAL_OFFSET}
      x2={fretXPosition[1]}
      y2={stringHeight + VERTICAL_OFFSET}
      stroke="black"
      strokeWidth={0.5}
    />,
    <line
      key="fret-3"
      x1={fretXPosition[2]}
      y1={VERTICAL_OFFSET}
      x2={fretXPosition[2]}
      y2={stringHeight + VERTICAL_OFFSET}
      stroke="black"
      strokeWidth={0.5}
    />,
    <line
      key="fret-4"
      x1={fretXPosition[3]}
      y1={VERTICAL_OFFSET}
      x2={fretXPosition[3]}
      y2={stringHeight + VERTICAL_OFFSET}
      stroke="black"
      strokeWidth={0.5}
    />
  ]
}
UkeFrets.propTypes = {
  fretXPosition: PropTypes.array,
  stringHeight: PropTypes.number
}
export default UkeFrets