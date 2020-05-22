import React from "react";
import CHORDS from "../lib/ukelele-chords.js";

function Ukelele(props) {
  const { chord } = props;
  let fretWidth = props.width / 5 || 550;
  let stringHeight = props.height / 2 || 300;

  let verticalOffset = 50;
  let headStockOffset = 10;
  let circleRadius = fretWidth / 6;

  let stringYPosition = [
    verticalOffset,
    stringHeight / 3 + verticalOffset,
    (stringHeight * 2) / 3 + verticalOffset,
    stringHeight + verticalOffset
  ];
  let fretXPosition = [
    fretWidth + headStockOffset,
    fretWidth * 2 + headStockOffset,
    fretWidth * 3 + headStockOffset,
    fretWidth * 4 + headStockOffset
  ];

  let circleComponents = [];
  let chordSchema;

  if (chord) {
    if (CHORDS[chord]) {
      chordSchema = CHORDS[chord];
      chordSchema.forEach(function (finger) {
        finger.string.forEach(function (string, index) {
          circleComponents.push(
            <circle
              key={chord + "_" + finger.fingerId + "_" + index}
              cx={
                fretWidth / 2 +
                fretWidth * (finger.fret - 1) +
                headStockOffset
              }
              cy={stringYPosition[string - 1]}
              r={circleRadius}
              fill="black"
            />
          );
        });
      });
    } else {
      if (Array.isArray(chord)) {
        let chordSchema = chord;
        chordSchema.forEach(function (finger) {
          finger.string.forEach(function (string, index) {
            circleComponents.push(
              <circle
                key={chord + "_" + finger.fingerId + "_" + index}
                cx={
                  fretWidth / 2 +
                  fretWidth * (finger.fret - 1) +
                  headStockOffset
                }
                cy={stringYPosition[string - 1]}
                r={circleRadius}
                fill="black"
              />
            );
          });
        });
      }
    }
  }

  return (
    <div>
      <svg width={props.width} height={props.height} id="svgOne">
        <rect
          x={headStockOffset}
          y={stringYPosition[0]}
          width={headStockOffset}
          height={stringHeight}
          fill="transparent"
          stroke="black"
          strokeWidth={1}
        />

        <line
          x1={headStockOffset * 2}
          y1={stringYPosition[0]}
          x2={props.width}
          y2={stringYPosition[0]}
          stroke="black"
          strokeWidth={1}
        />
        <line
          x1={headStockOffset * 2}
          y1={stringYPosition[1]}
          x2={props.width}
          y2={stringYPosition[1]}
          stroke="black"
          strokeWidth={1}
        />
        <line
          x1={headStockOffset * 2}
          y1={stringYPosition[2]}
          x2={props.width}
          y2={stringYPosition[2]}
          stroke="black"
          strokeWidth={1}
        />
        <line
          x1={headStockOffset * 2}
          y1={stringYPosition[3]}
          x2={props.width}
          y2={stringYPosition[3]}
          stroke="black"
          strokeWidth={1}
        />

        <line
          x1={fretXPosition[0]}
          y1={verticalOffset}
          x2={fretXPosition[0]}
          y2={stringHeight + verticalOffset}
          stroke="black"
          strokeWidth={0.5}
        />
        <line
          x1={fretXPosition[1]}
          y1={verticalOffset}
          x2={fretXPosition[1]}
          y2={stringHeight + verticalOffset}
          stroke="black"
          strokeWidth={0.5}
        />
        <line
          x1={fretXPosition[2]}
          y1={verticalOffset}
          x2={fretXPosition[2]}
          y2={stringHeight + verticalOffset}
          stroke="black"
          strokeWidth={0.5}
        />
        <line
          x1={fretXPosition[3]}
          y1={verticalOffset}
          x2={fretXPosition[3]}
          y2={stringHeight + verticalOffset}
          stroke="black"
          strokeWidth={0.5}
        />

        {circleComponents.map(circle => circle)}
      </svg>
    </div>
  );
}

Ukelele.defaultProps = {
  chord: "A",
  width: 300,
  height: 300,
  padding: 0
}

export default Ukelele