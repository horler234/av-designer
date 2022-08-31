import {
  DashboardIcon,
  CreateProjectIcon,
  AllProjectsIcon,
  ProposalsIcon,
  ContactsIcon,
  ClientsIcon,
} from "../components/icons/navigation";

export const navLinks = [
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
