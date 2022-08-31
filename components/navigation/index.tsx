import { useRouter } from "next/router";
import {
  AllProjectsIcon,
  ClientsIcon,
  ContactsIcon,
  CreateProjectIcon,
  DashboardIcon,
  ProposalsIcon,
} from "../icons/navigation";
import {
  ExtraLink,
  NavigationButtonsList,
  NavigationContainer,
  NeedHelpContainer,
  PageContainer,
  ThemeModeContainer,
} from "./NavStyles";
import { motion } from "framer-motion";
import Link from "next/link";
import { LearnIcon, SunIcon, TutorialsIcon } from "../icons";
import { ReactNode } from "react";

const navLinks = [
  { title: "Dashboard", icon: <DashboardIcon />, href: "/" },
  {
    title: "Create Project",
    icon: <CreateProjectIcon />,
    href: "/create-project",
  },
  {
    title: "All Projects",
    icon: <AllProjectsIcon isNavigation />,
    href: "/projects",
  },
  {
    title: "Proposals",
    icon: <ProposalsIcon isNavigation />,
    href: "/proposals",
  },
  { title: "Clients", icon: <ClientsIcon />, href: "/clients" },
  { title: "All Contacts", icon: <ContactsIcon />, href: "/contacts" },
];

interface INavbar {
  children: ReactNode;
}

export const Navbar = ({ children }: INavbar) => {
  const router = useRouter();
  return (
    <PageContainer>
      <NavigationContainer>
        <h1>
          <span>AV</span> DESIGNER
        </h1>

        <NavigationButtonsList>
          {navLinks.map(({ href, title, icon }, i) => (
            <li key={i}>
              {href === router.pathname && (
                <motion.div
                  layoutId="navigation"
                  style={{
                    width: "100%",
                    height: "100%",
                    background: "#FF6600",
                    position: "absolute",
                    borderRadius: 8,
                  }}
                />
              )}
              <button onClick={() => router.push(href)}>
                {icon} {title}
              </button>
            </li>
          ))}
        </NavigationButtonsList>

        <Link href="/" passHref>
          <ExtraLink>
            <span>
              <LearnIcon />
            </span>
            Learn AV Designer
          </ExtraLink>
        </Link>

        <Link href="/" passHref>
          <ExtraLink>
            <span>
              <TutorialsIcon />
            </span>
            Tutorials
          </ExtraLink>
        </Link>

        <NeedHelpContainer>
          <p>Need Help?</p>

          <Link href="/">
            <a>Get Support/Feedback</a>
          </Link>
        </NeedHelpContainer>

        <ThemeModeContainer>
          <SunIcon />

          <label>
            <input type="checkbox" />
            <span />
          </label>
        </ThemeModeContainer>
      </NavigationContainer>

      {children}
    </PageContainer>
  );
};
