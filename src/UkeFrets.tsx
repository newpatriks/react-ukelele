import { VERTICAL_OFFSET } from "./constants/ukelele-chords";

type Props = {
  fretXPosition: number[];
  stringHeight: number;
};

export default function UkeFrets({ fretXPosition, stringHeight }: Props) {
  return (
    <g>
      <line
        key="fret-1"
        x1={fretXPosition[0]}
        y1={VERTICAL_OFFSET}
        x2={fretXPosition[0]}
        y2={stringHeight + VERTICAL_OFFSET}
        stroke="black"
        strokeWidth={0.5}
      />
      <line
        key="fret-2"
        x1={fretXPosition[1]}
        y1={VERTICAL_OFFSET}
        x2={fretXPosition[1]}
        y2={stringHeight + VERTICAL_OFFSET}
        stroke="black"
        strokeWidth={0.5}
      />
      <line
        key="fret-3"
        x1={fretXPosition[2]}
        y1={VERTICAL_OFFSET}
        x2={fretXPosition[2]}
        y2={stringHeight + VERTICAL_OFFSET}
        stroke="black"
        strokeWidth={0.5}
      />
      <line
        key="fret-4"
        x1={fretXPosition[3]}
        y1={VERTICAL_OFFSET}
        x2={fretXPosition[3]}
        y2={stringHeight + VERTICAL_OFFSET}
        stroke="black"
        strokeWidth={0.5}
      />
    </g>
  );
}
