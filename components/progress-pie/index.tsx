import styled from "styled-components";
import { cleanPercentage } from "../../utils/cleanPercentage";
import { Circle } from "./Circle";

export const DashboardProgressRing = styled.svg`
  circle {
    transition: all 0.6s ease;
  }

  text {
    font-size: 1.5em;
    fill: #0e0e2c;
    font-weight: 900;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
  }

  @media (max-width: 500px) {
    transform: scale(0.6);
    margin-right: -20px;
  }
`;

interface IText {
  value: number;
}

interface IPie extends IText {
  percentage: number;
  color: string;
}

const Text = ({ value }: IText) => {
  return (
    <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle">
      {value.toFixed(0)}
    </text>
  );
};

export const Pie = ({ value, percentage, color }: IPie) => {
  const pct = cleanPercentage(percentage);
  return (
    <DashboardProgressRing width={38} height={38}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle color="#fff" />
        <Circle color={color} percent={pct} />
      </g>
      <Text value={value} />
    </DashboardProgressRing>
  );
};
