import { HEAD_STOCK_OFFSET } from "./constants/ukelele-chords";

type Props = {
  stringYPosition: number;
  stringHeight: number;
  color: string;
};

export default function UkeNut({ stringYPosition, stringHeight, color }: Props) {
  return (
    <rect
      x={HEAD_STOCK_OFFSET}
      y={stringYPosition}
      width={HEAD_STOCK_OFFSET}
      height={stringHeight}
      fill="transparent"
      stroke={color}
      strokeWidth={1}
    />
  );
}
