import { HEAD_STOCK_OFFSET } from "./constants/ukelele-chords";

type Props = {
  stringYPosition: number[];
  width: number;
};

export default function UkeStrings({ stringYPosition, width }: Props) {
  return (
    <g>
      <line
        key="string-1"
        x1={HEAD_STOCK_OFFSET * 2}
        y1={stringYPosition[0]}
        x2={width}
        y2={stringYPosition[0]}
        stroke="black"
        strokeWidth={1}
      />
      <line
        key="string-2"
        x1={HEAD_STOCK_OFFSET * 2}
        y1={stringYPosition[1]}
        x2={width}
        y2={stringYPosition[1]}
        stroke="black"
        strokeWidth={1}
      />
      <line
        key="string-3"
        x1={HEAD_STOCK_OFFSET * 2}
        y1={stringYPosition[2]}
        x2={width}
        y2={stringYPosition[2]}
        stroke="black"
        strokeWidth={1}
      />
      <line
        key="string-4"
        x1={HEAD_STOCK_OFFSET * 2}
        y1={stringYPosition[3]}
        x2={width}
        y2={stringYPosition[3]}
        stroke="black"
        strokeWidth={1}
      />
    </g>
  );
}
