import { HEAD_STOCK_OFFSET } from "./constants/ukelele-chords";

type Props = {
  stringYPosition: number;
  stringHeight: number;
};

export default function UkeNut({ stringYPosition, stringHeight }: Props) {
  return (
    <rect
      x={HEAD_STOCK_OFFSET}
      y={stringYPosition}
      width={HEAD_STOCK_OFFSET}
      height={stringHeight}
      fill="transparent"
      stroke="black"
      strokeWidth={1}
    />
  );
}
