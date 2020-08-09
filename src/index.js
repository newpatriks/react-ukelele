import React from "react";
import { VERTICAL_OFFSET, HEAD_STOCK_OFFSET, CHORDS } from "./ukelele-chords.js";
import UkeNut from './UkeNut'
import UkeStrings from './UkeStrings'
import UkeFrets from './UkeFrets'

function Ukelele(props) {
  const { chord } = props;
  if (!chord) return null

  const chordExist = Boolean(CHORDS[chord])
  let fretWidth = props.width / 5 || 550;
  let stringHeight = props.height / 2 || 300;
  let circleRadius = fretWidth / 6;

  let stringYPosition = [
    VERTICAL_OFFSET,
    stringHeight / 3 + VERTICAL_OFFSET,
    (stringHeight * 2) / 3 + VERTICAL_OFFSET,
    stringHeight + VERTICAL_OFFSET
  ];
  let fretXPosition = [
    fretWidth + HEAD_STOCK_OFFSET,
    fretWidth * 2 + HEAD_STOCK_OFFSET,
    fretWidth * 3 + HEAD_STOCK_OFFSET,
    fretWidth * 4 + HEAD_STOCK_OFFSET
  ];

  let circleComponents = [];
  let chordSchema;
  if (chordExist) {
    const chordSchema = CHORDS[chord]
    chordSchema.forEach(function (finger) {
      finger.string.forEach(function (string, index) {
        circleComponents.push(
          <circle
            key={chord + "_" + finger.fingerId + "_" + index}
            cx={
              fretWidth / 2 +
              fretWidth * (finger.fret - 1) +
              HEAD_STOCK_OFFSET
            }
            cy={stringYPosition[string - 1]}
            r={circleRadius}
            fill="black"
          />
        );
      });
    });

    return (
      <svg width={props.width} height={props.height} id="svgOne">
        <UkeNut stringYPosition={stringYPosition[0]} width={props.width} stringHeight={stringHeight} />
        <UkeStrings stringYPosition={stringYPosition} width={props.width} />
        <UkeFrets fretXPosition={fretXPosition} stringHeight={stringHeight} />
        {circleComponents.map(circle => circle)}
      </svg>
    );
  }
}

Ukelele.defaultProps = {
  chord: "A",
  width: 300,
  height: 300,
  padding: 0
}

export default Ukelele