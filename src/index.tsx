import {
  VERTICAL_OFFSET,
  HEAD_STOCK_OFFSET,
  CHORDS,
} from "./constants/ukelele-chords";
import UkeNut from "./UkeNut";
import UkeStrings from "./UkeStrings";
import UkeFrets from "./UkeFrets";
import { chordType } from "./constants/types";

type Props = {
  chord: string;
  width?: number;
  height?: number;
};

export default function Ukelele({
  chord = "A",
  width = 300,
  height = 300,
}: Props) {
  const chordExist = Boolean(CHORDS[chord]);
  let fretWidth = width / 5 || 550;
  let stringHeight = height / 2 || 300;
  let circleRadius = fretWidth / 6;

  let stringYPosition = [
    VERTICAL_OFFSET,
    stringHeight / 3 + VERTICAL_OFFSET,
    (stringHeight * 2) / 3 + VERTICAL_OFFSET,
    stringHeight + VERTICAL_OFFSET,
  ];
  let fretXPosition = [
    fretWidth + HEAD_STOCK_OFFSET,
    fretWidth * 2 + HEAD_STOCK_OFFSET,
    fretWidth * 3 + HEAD_STOCK_OFFSET,
    fretWidth * 4 + HEAD_STOCK_OFFSET,
  ];

  let circleComponents: JSX.Element[] = [];
  let chordSchema: chordType[];
  if (chordExist) {
    chordSchema = CHORDS[chord];
    chordSchema.forEach(function (finger) {
      finger.string.forEach(function (string, index) {
        circleComponents.push(
          <circle
            key={chord + "_" + finger.fingerId + "_" + index}
            cx={
              fretWidth / 2 + fretWidth * (finger.fret - 1) + HEAD_STOCK_OFFSET
            }
            cy={stringYPosition[string - 1]}
            r={circleRadius}
            fill="black"
          />
        );
      });
    });

    return (
      <svg width={width} height={height} id="svgOne">
        <UkeNut
          stringYPosition={stringYPosition[0]}
          stringHeight={stringHeight}
        />
        <UkeStrings stringYPosition={stringYPosition} width={width} />
        <UkeFrets fretXPosition={fretXPosition} stringHeight={stringHeight} />
        {...circleComponents}
      </svg>
    );
  }
}
