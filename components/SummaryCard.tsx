import { ReactNode } from "react";
import styled from "styled-components";
import { Pie } from "./progress-pie";

export const SummaryCardContainer = styled.div<{ bg: string }>`
  width: calc(25% - 15px);
  padding: 9px 14px 9px 24px;
  background: ${(props) => props.bg};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  div:first-child {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 9.5px;
  }

  @media (max-width: 1060px) {
    div:first-child {
      font-size: 14px;

      svg {
        width: 25px;
      }
    }
  }

  @media (max-width: 980px) {
    width: calc(50% - 15px);
    margin-bottom: 30px;
  }

  @media (max-width: 520px) {
    width: 100%;
  }
`;

interface ISummaryCard {
  icon: ReactNode;
  title: string;
  bg: string;
  progressBg: string;
  value: number;
}

export const SummaryCard = ({
  icon,
  title,
  bg,
  progressBg,
  value,
}: ISummaryCard) => (
  <SummaryCardContainer bg={bg}>
    <div>
      My {title} {icon}
    </div>

    <Pie color={progressBg} value={value} percentage={50} />
  </SummaryCardContainer>
);
