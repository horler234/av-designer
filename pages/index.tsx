import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import dynamic from "next/dynamic";
import {
  CrossIcon,
  DesignsIcon,
  DownCaretIcon,
  FilterIcon,
  NotificationIcon,
  PenIcon,
  SearchIcon,
} from "../components/icons";
import { AllProjectsIcon, ProposalsIcon } from "../components/icons/navigation";
import { SummaryCard } from "../components/SummaryCard";

const DonutChart = dynamic(() => import("react-donut-chart"), { ssr: false });

export const DashboardContentContainer = styled.main`
  background: #f2f2f2;
  height: 100%;
  overflow-y: auto;
  padding: 46px 25px 33px 25px;
  width: calc(100% - 239px);

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 520px) {
    padding: 46px 2.5% 33px 2.5%;
  }
`;

export const DashboardHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 39.5px;

  @media (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: flex-end;
  }
`;

export const DashboardHeaderInputContainer = styled.div`
  flex: auto;
  display: flex;
  height: 44px;
  padding: 0 16px;
  background: #fff;
  align-items: center;
  border-radius: 8px;

  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  form {
    flex: auto;
    height: 100%;
    margin: 0 12px;

    input {
      width: 100%;
      font-size: 16px;
      font-family: inherit;
      height: 100%;
      border: none;

      &:focus {
        outline: none;
      }
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

export const NotificationButtonContainer = styled.div`
  margin-left: 34px;
  button {
    width: 43px;
    height: 43px;
    border-radius: 50%;
    background: #ffffff;
    cursor: pointer;
    position: relative;
    border: none;

    span {
      position: absolute;
      background: #ff6600;
      width: 16px;
      height: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 4px;
      right: 9px;
      border-radius: 50%;
      font-weight: 700;
      font-size: 10px;
      line-height: 12px;
      color: #ffffff;
    }
  }
`;

export const ProfileButtonContainer = styled.div`
  margin-left: 22px;

  button {
    padding: 3.5px 8.5px;
    background: #ffffff;
    border-radius: 8px;
    cursor: pointer;
    font-family: inherit;
    border: transparent;
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    color: #0e0e2c;

    p {
      margin-left: 11px;
    }

    svg {
      margin-left: 8px;
    }
  }
`;

export const SummarySection = styled.section`
  display: flex;
  justify-content: space-between;

  @media (max-width: 980px) {
    flex-wrap: wrap;
  }
`;

export const InfoSection = styled.section`
  margin-top: 36.5px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const InfoCardContainer = styled.div`
  filter: drop-shadow(1px 4px 8px rgba(0, 0, 0, 0.25));
  height: 376px;
  background: #ffffff;
  border-radius: 12px;
  width: calc(50% - 21px);

  @media (max-width: 1220px) {
    width: 100%;
  }
`;

export const InfoCardHeader = styled.div`
  background: #e8e8e8;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px 8px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 71px;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #242424;

  button {
    cursor: pointer;
    font-family: inherit;
    background: transparent;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    padding: 0 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #242424;
    width: 121px;
    height: 32px;
    border: 0.5px solid #242424;
    border-radius: 4px;
  }
`;

export const RecentDesignCardContainer = styled(InfoCardContainer)`
  table {
    padding-bottom: 13px;
    width: 100%;

    tr {
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 8px;

      th {
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        text-align: left;
        color: #000000;
        padding-left: 10px;
      }

      td {
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #242424;
        text-align: left;
        padding-left: 10px;
      }
    }

    th:first-child,
    td:first-child {
      width: calc(100% - 248px);
    }

    th:nth-child(2),
    td:nth-child(2) {
      width: 132px;
    }

    th:last-child,
    td:last-child {
      width: 92px;
    }
  }

  @media (max-width: 1220px) {
    width: 100%;
    margin-top: 24px;
  }

  @media (max-width: 540px) {
    div {
      overflow-x: auto;

      &::-webkit-scrollbar {
        display: none;
      }
    }

    table {
      th:first-child,
      td:first-child {
        width: 230px;
      }
    }
  }
`;

export const RecentProjectCardContainer = styled(InfoCardContainer)`
  width: 730.05px;
  height: 331px;

  table {
    padding-bottom: 13px;
    width: 100%;

    tr {
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid rgba(211, 214, 216, 0.5);

      th {
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        text-align: left;
        color: #000000;
        padding-left: 10px;
      }

      td {
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #242424;
        text-align: left;
        padding-left: 10px;
      }
    }

    th,
    td {
      width: 122.75px;
    }

    th:first-child,
    td:first-child {
      width: 171px;
    }
  }

  @media (max-width: 1335px) {
    width: 100%;
    margin-bottom: 24px;
  }

  @media (max-width: 767px) {
    div {
      overflow-x: auto;

      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

export const RecentProposalCardContainer = styled(InfoCardContainer)`
  width: auto;
  flex: auto;
  margin-left: 19px;
  height: 331px;
  min-width: 295px;

  table {
    padding-bottom: 13px;
    width: 100%;

    tr {
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1px solid rgba(211, 214, 216, 0.5);

      th {
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        text-align: left;
        color: #000000;
        padding-left: 10px;
      }

      td {
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #242424;
        text-align: left;
        padding-left: 10px;
      }
    }

    th:first-child,
    td:first-child {
      flex: auto;
    }

    th:last-child,
    td:last-child {
      width: 106px;
    }
  }

  @media (max-width: 1335px) {
    margin-left: 0;
  }
`;

export const SummaryChartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 40px;
  padding-right: 16px;
  padding-left: 40px;

  @media (max-width: 1280px) {
    padding-left: 20px;
  }

  @media (max-width: 1220px) {
    justify-content: center;
  }
`;

export const DonutContainer = styled.div`
  width: 220px;
  height: 220px;
  transform: rotate(-85deg);
  position: relative;

  @media (max-width: 1220px) {
    margin-right: 20px;
  }
`;

export const DonutContainerTextContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  transform: rotate(85deg);
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-weight: 700;
    font-size: 24px;
    letter-spacing: -0.02em;
    color: #8d08f5;
    margin-bottom: 8px;
  }

  p {
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    color: #242424;
  }
`;

export const LegendContainer = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 17px;
  width: 233px;
  color: rgba(0, 0, 0, 0.75);
  height: 44px;

  span {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${(props) => props.color};
    margin-right: 10px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

const recentDesigns = [
  { name: "Create BOM Project", progress: "100%", estimate: "N2,500,000" },
  { name: "Hausba CONFERENCE HALL", progress: "80%", estimate: "N1,250,800" },
  { name: "New NASS AUDITORIUM", progress: "50%", estimate: "N7,500,000" },
  {
    name: "UniAbuja Ultra Morden LECTURE HALL",
    progress: "100%",
    estimate: "N5,500,000",
  },
  { name: "Kilmanjaro CAFETERIA", progress: "100%", estimate: "N2,500,000" },
];

const recentProposals = [
  { name: "Villa F25 project proposal", budget: "$25,000,000" },
  { name: "GMA Residence project proposal", budget: "$32,000,000" },
  { name: "Banana Mansion project proposal", budget: "$15,000,000" },
];

const recentProjects = [
  {
    name: "Villa F25 Project",
    no: "P-101",
    date: "12/01/2018",
    client: "Your client name1",
    budget: "$55,000",
  },
  {
    name: "GMA Residence Project",
    no: "P-102",
    date: "22/01/2019",
    client: "Your client name2",
    budget: "$25,000",
  },
  {
    name: "Banana Mansion Project",
    no: "P-103",
    date: "10/02/2020",
    client: "Your client name3",
    budget: "$65,000",
  },
];

const colors = ["#8D08F5", "#1255B3", "#3DBF91", "#FF6600"];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>AV Designer</title>
      </Head>

      <DashboardContentContainer>
        <DashboardHeaderContainer>
          <DashboardHeaderInputContainer>
            <SearchIcon />

            <form>
              <input type="text" placeholder="Search" />
            </form>

            <button>
              <CrossIcon />
            </button>
          </DashboardHeaderInputContainer>

          <NotificationButtonContainer>
            <button>
              <NotificationIcon />

              <span>2</span>
            </button>
          </NotificationButtonContainer>

          <ProfileButtonContainer>
            <button>
              <Image
                src="/images/avatar.png"
                width={36}
                height={36}
                alt="Placeholder Avatar"
              />

              <p>chibuzor</p>

              <DownCaretIcon />
            </button>
          </ProfileButtonContainer>
        </DashboardHeaderContainer>

        <SummarySection>
          <SummaryCard
            value={42}
            bg="rgba(242, 48, 48, 0.25)"
            progressBg="rgba(242, 48, 48, 0.5)"
            title="Projects"
            icon={<AllProjectsIcon />}
          />
          <SummaryCard
            value={25}
            bg="rgba(141, 8, 245, 0.25)"
            progressBg="rgba(141, 8, 245, 0.5)"
            title="Proposals"
            icon={<ProposalsIcon />}
          />
          <SummaryCard
            value={15}
            bg="rgba(61, 191, 145, 0.25)"
            progressBg="rgba(61, 191, 145, 0.5)"
            title="Designs"
            icon={<DesignsIcon />}
          />
          <SummaryCard
            value={28}
            bg="rgba(255, 102, 0, 0.25)"
            progressBg="rgba(255, 102, 0, 0.5)"
            title="Drawings"
            icon={<PenIcon />}
          />
        </SummarySection>

        <InfoSection>
          <InfoCardContainer>
            <InfoCardHeader>
              Overall Summary
              <button>
                Annual <FilterIcon />
              </button>
            </InfoCardHeader>

            <SummaryChartContainer>
              <DonutContainer>
                <DonutContainerTextContainer>
                  <h2>$1.2m</h2>
                  <p>12 projects completed</p>
                </DonutContainerTextContainer>
                <DonutChart
                  height={220}
                  legend={false}
                  clickToggle={false}
                  interactive={false}
                  width={220}
                  strokeColor="transparent"
                  formatValues={() => ""}
                  emptyColor="transparent"
                  colors={colors}
                  data={[
                    {
                      label: "Completed Project",
                      value: 0.6,
                    },
                    {
                      label: "Completed Project",
                      value: 0.18,
                    },
                    {
                      label: "Completed Project",
                      value: 0.18,
                    },
                    {
                      label: "Completed Project",
                      value: 0.18,
                    },
                    {
                      label: "",
                      value: 0.06,
                      isEmpty: true,
                    },
                  ]}
                />
              </DonutContainer>

              <div>
                <LegendContainer color={colors[0]}>
                  <span />
                  Completed Project: $1.2m
                </LegendContainer>
                <LegendContainer color={colors[1]}>
                  <span />
                  Total Revenue: $1.2m
                </LegendContainer>
                <LegendContainer color={colors[2]}>
                  <span />
                  Pending Project: 1.2m
                </LegendContainer>
                <LegendContainer color={colors[3]}>
                  <span />
                  Project Brief: 1.2m
                </LegendContainer>
              </div>
            </SummaryChartContainer>
          </InfoCardContainer>

          <RecentDesignCardContainer>
            <InfoCardHeader>My Recent Designs</InfoCardHeader>

            <div>
              <table>
                <tr>
                  <th>Design Name</th>
                  <th>% Progress</th>
                  <th>Estimate</th>
                </tr>

                {recentDesigns.map(({ name, progress, estimate }, i) => (
                  <tr key={i}>
                    <td>{name}</td>
                    <td>{progress}</td>
                    <td>{estimate}</td>
                  </tr>
                ))}
              </table>
            </div>
          </RecentDesignCardContainer>
        </InfoSection>
        <InfoSection>
          <RecentProjectCardContainer>
            <InfoCardHeader>Overall Summary</InfoCardHeader>

            <div>
              <table>
                <tr>
                  <th>Project Name</th>
                  <th>Project No</th>
                  <th>Date</th>
                  <th>Client</th>
                  <th>Budget</th>
                </tr>

                {recentProjects.map(({ name, no, date, client, budget }, i) => (
                  <tr key={i}>
                    <td>{name}</td>
                    <td>{no}</td>
                    <td>{date}</td>
                    <td>{client}</td>
                    <td>{budget}</td>
                  </tr>
                ))}
              </table>
            </div>
          </RecentProjectCardContainer>

          <RecentProposalCardContainer>
            <InfoCardHeader>My Recent Proposals</InfoCardHeader>

            <table>
              <tr>
                <th>Proposal Name</th>
                <th>Budget</th>
              </tr>

              {recentProposals.map(({ name, budget }, i) => (
                <tr key={i}>
                  <td>{name}</td>
                  <td>{budget}</td>
                </tr>
              ))}
            </table>
          </RecentProposalCardContainer>
        </InfoSection>
      </DashboardContentContainer>
    </>
  );
};

export default Home;
