import React from "react";
import { VERTICAL_OFFSET, HEAD_STOCK_OFFSET, CHORDS } from "./ukelele-chords.js";

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
    const fingers = chordSchema.map(finger => { [finger.fingerId, { finger }] });
    console.log('fingers >> ', fingers);



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
    // } else {
    //   if (Array.isArray(chord)) {
    //     let chordSchema = chord;
    //     chordSchema.forEach(function (finger) {
    //       finger.string.forEach(function (string, index) {
    //         circleComponents.push(
    //           <circle
    //             key={chord + "_" + finger.fingerId + "_" + index}
    //             cx={
    //               fretWidth / 2 +
    //               fretWidth * (finger.fret - 1) +
    //               HEAD_STOCK_OFFSET
    //             }
    //             cy={stringYPosition[string - 1]}
    //             r={circleRadius}
    //             fill="black"
    //           />
    //         );
    //       });
    //     });
    //   }
    // }

    return (
      <svg width={props.width} height={props.height} id="svgOne">
        <rect
          x={HEAD_STOCK_OFFSET}
          y={stringYPosition[0]}
          width={HEAD_STOCK_OFFSET}
          height={stringHeight}
          fill="transparent"
          stroke="black"
          strokeWidth={1}
        />

        <line
          x1={HEAD_STOCK_OFFSET * 2}
          y1={stringYPosition[0]}
          x2={props.width}
          y2={stringYPosition[0]}
          stroke="black"
          strokeWidth={1}
        />
        <line
          x1={HEAD_STOCK_OFFSET * 2}
          y1={stringYPosition[1]}
          x2={props.width}
          y2={stringYPosition[1]}
          stroke="black"
          strokeWidth={1}
        />
        <line
          x1={HEAD_STOCK_OFFSET * 2}
          y1={stringYPosition[2]}
          x2={props.width}
          y2={stringYPosition[2]}
          stroke="black"
          strokeWidth={1}
        />
        <line
          x1={HEAD_STOCK_OFFSET * 2}
          y1={stringYPosition[3]}
          x2={props.width}
          y2={stringYPosition[3]}
          stroke="black"
          strokeWidth={1}
        />

        <line
          x1={fretXPosition[0]}
          y1={VERTICAL_OFFSET}
          x2={fretXPosition[0]}
          y2={stringHeight + VERTICAL_OFFSET}
          stroke="black"
          strokeWidth={0.5}
        />
        <line
          x1={fretXPosition[1]}
          y1={VERTICAL_OFFSET}
          x2={fretXPosition[1]}
          y2={stringHeight + VERTICAL_OFFSET}
          stroke="black"
          strokeWidth={0.5}
        />
        <line
          x1={fretXPosition[2]}
          y1={VERTICAL_OFFSET}
          x2={fretXPosition[2]}
          y2={stringHeight + VERTICAL_OFFSET}
          stroke="black"
          strokeWidth={0.5}
        />
        <line
          x1={fretXPosition[3]}
          y1={VERTICAL_OFFSET}
          x2={fretXPosition[3]}
          y2={stringHeight + VERTICAL_OFFSET}
          stroke="black"
          strokeWidth={0.5}
        />

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