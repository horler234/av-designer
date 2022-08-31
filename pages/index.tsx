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
import {
  DashboardContentContainer,
  DashboardHeaderContainer,
  DashboardHeaderInputContainer,
  DonutContainer,
  DonutContainerTextContainer,
  InfoCardContainer,
  InfoCardHeader,
  InfoSection,
  LegendContainer,
  NotificationButtonContainer,
  ProfileButtonContainer,
  RecentDesignCardContainer,
  RecentProjectCardContainer,
  RecentProposalCardContainer,
  SummaryChartContainer,
  SummarySection,
} from "../styles/DashboardStyles";

const DonutChart = dynamic(() => import("react-donut-chart"), { ssr: false });

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
