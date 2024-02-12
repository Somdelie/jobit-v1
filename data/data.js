import {
  FaFileInvoiceDollar,
  FaInbox,
  FaMapMarkedAlt,
  FaUserFriends,
} from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import {
  MdOutlineDashboardCustomize,
  MdSettings,
  MdSubscriptions,
} from "react-icons/md";
import { SiFreelancer } from "react-icons/si";
import { AiFillSchedule } from "react-icons/ai";
import { TbMessageReport } from "react-icons/tb";

export const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "News",
    link: "/news",
  },
  {
    title: "Work with Us",
    link: "/freelancers/create",
  },
  {
    title: "Contact",
    link: "/contact",
  },
];
export const verified = [
  {
    icon: "/free-trial-membership.svg",
    title: "Stand out from the crowd",
    desc: "Spend less time hunting, more time winning. Verified freelancers are rewarded with a distinct and highly recognizable badge that makes sure that clients notice them first, increasing their chances of being awarded. Let clients come to you rather than wasting bids.",
  },
  {
    icon: "/verify-your-identity.svg",
    title: "Increase Confidence",
    desc: "Being Verified by Freelancer means that you've gone through a video interview process with Freelancer staff. This will help clients recognize you as an authenticated member of Freelancer.",
  },
  {
    icon: "/make-money.svg",
    title: "Bid on projects worth $2,500.00 USD+",
    desc: "Verified by Freelancer allows exclusive access to longer, more interesting, and better paying projects. Only Verified by Freelancer can bid on projects worth $2,500.00 USD or more.",
  },
];

export const freelancers = [
  {
    id: 1,
    profilePhoto: "/avatar-3.png",
    firstName: "John",
    surname: "Doe",
    address: "33 14th Ave Cnr, Dunvegan St, Sydenham Johannesburg",
    desc: "Experienced painter with a passion for creating vibrant and expressive artworks.",
    ratings: 4.8,
    jobType: "Painter",
  },
  {
    id: 2,
    profilePhoto: "/avatar-3.png",
    firstName: "Alice",
    surname: "Smith",
    address: "33 14th Ave Cnr, Dunvegan St, Sydenham Johannesburg",
    desc: "Skilled bricklayer specializing in intricate designs and solid constructions.",
    ratings: 4.5,
    jobType: "Bricklayer",
  },
  {
    id: 3,
    profilePhoto: "/avatar-3.png",
    firstName: "Michael",
    surname: "Brown",
    address: "33 14th Ave Cnr, Dunvegan St, Sydenham Johannesburg",
    desc: "Experienced shopkeeper offering top-notch customer service and product knowledge.",
    ratings: 4.9,
    jobType: "Shopkeeper",
  },
  {
    id: 4,
    profilePhoto: "/avatar-3.png",
    firstName: "Sarah",
    surname: "Johnson",
    address: "33 14th Ave Cnr, Dunvegan St, Sydenham Johannesburg",
    desc: "Passionate graphic designer with a keen eye for detail and creativity.",
    ratings: 4.7,
    jobType: "Graphic Designer",
  },
  {
    id: 5,
    profilePhoto: "/avatar-3.png",
    firstName: "David",
    surname: "Wilson",
    address: "33 14th Ave Cnr, Dunvegan St, Sydenham Johannesburg",
    desc: "Expert plumber with years of experience in residential and commercial plumbing.",
    ratings: 4.6,
    jobType: "Plumber",
  },
  {
    id: 6,
    profilePhoto: "/avatar-3.png",
    firstName: "Emily",
    surname: "Taylor",
    address: "33 14th Ave Cnr, Dunvegan St, Sydenham Johannesburg",
    desc: "Talented interior designer specializing in modern and minimalist designs.",
    ratings: 4.9,
    jobType: "Interior Designer",
  },
  {
    id: 7,
    profilePhoto: "/avatar-3.png",
    firstName: "Daniel",
    surname: "Anderson",
    address: "33 14th Ave Cnr, Dunvegan St, Sydenham Johannesburg",
    desc: "Experienced electrician providing high-quality electrical services.",
    ratings: 4.8,
    jobType: "Electrician",
  },
  {
    id: 8,
    profilePhoto: "/avatar-3.png",
    firstName: "Olivia",
    surname: "Martinez",
    address: "33 14th Ave Cnr, Dunvegan St, Sydenham Johannesburg",
    desc: "Professional photographer capturing moments that last a lifetime.",
    ratings: 4.9,
    jobType: "Photographer",
  },
  {
    id: 9,
    profilePhoto: "/avatar-3.png",
    firstName: "James",
    surname: "Jones",
    address: "33 14th Ave Cnr, Dunvegan St, Sydenham Johannesburg",
    desc: "Experienced carpenter specializing in custom furniture and woodworking.",
    ratings: 4.7,
    jobType: "Carpenter",
  },
  {
    id: 10,
    profilePhoto: "/avatar-3.png",
    firstName: "Sophia",
    surname: "Garcia",
    address: "33 14th Ave Cnr, Dunvegan St, Sydenham Johannesburg",
    desc: "Skilled landscaper creating beautiful outdoor spaces for homes and businesses.",
    ratings: 4.6,
    jobType: "Landscaper",
  },
  {
    id: 11,
    profilePhoto: "/avatar-3.png",
    firstName: "Liam",
    surname: "Rodriguez",
    address: "33 14th Ave Cnr, Dunvegan St, Sydenham Johannesburg",
    desc: "Expert HVAC technician providing top-notch heating and cooling services.",
    ratings: 4.8,
    jobType: "HVAC Technician",
  },
  {
    id: 12,
    profilePhoto: "/avatar-3.png",
    firstName: "Ava",
    surname: "Lopez",
    address: "33 14th Ave Cnr, Dunvegan St, Sydenham Johannesburg",
    desc: "Professional event planner creating memorable experiences for special occasions.",
    ratings: 4.9,
    jobType: "Event Planner",
  },
  // Add more profiles here...
];

export const categories = [
  { id: 1, name: "Air conditioning" },
  { id: 2, name: "Architects" },
  { id: 3, name: "Building contractors" },
  { id: 4, name: "Carports" },
  { id: 5, name: "Doors" },
  { id: 6, name: "Electricians" },
  { id: 7, name: "Fences" },
  { id: 8, name: "Flooring" },
  { id: 9, name: "Garage doors" },
  { id: 10, name: "Gates" },
  { id: 11, name: "Handymen" },
  { id: 12, name: "Landscaping and gardening" },
  { id: 13, name: "Painters" },
  { id: 14, name: "Paving" },
  { id: 15, name: "Plumbers" },
  { id: 16, name: "Roofing" },
  { id: 17, name: "Solar panels" },
  { id: 18, name: "Waterproofing" },
  { id: 19, name: "Windows" },
  { id: 20, name: "Accountants" },
  { id: 21, name: "Cleaning services" },
  { id: 22, name: "Debt collection" },
  { id: 23, name: "Debt consolidation" },
  { id: 24, name: "Digital marketing and SEO services" },
  { id: 25, name: "Moving companies" },
  { id: 26, name: "Pest control" },
  { id: 27, name: "Real estate agents" },
  { id: 28, name: "Security companies" },
  { id: 29, name: "Web design" },
];

export const projects = [
  {
    id: 1,
    user: {
      id: 1,
      firstName: "John",
      surname: "Doe",
      address: "33 14th Ave Cnr, Dunvegan St, Sydenham Johannesburg",
    },
    jobType: "E-Commerce Website Development",
    desc: "I'm looking for an experienced web developer to create an online store dedicated to mobile accessories with POS features. Here's an outline of the project requirements: Compatibility: * The store should be exclusively web-based. However need for iOS or Android versions. Key Features: * The website… more",
    skills: ["PHP", "Website Design", "Shopping Carts", "HTML"],
    address: "33 14th Ave Cnr, Dunvegan St, Sydenham Johannesburg",
    status: "canceled",
  },
  {
    id: 2,
    user: {
      id: 2,
      firstName: "Alice",
      surname: "Smith",
      address: "22 5th Street, Parklands, Cape Town",
    },
    jobType: "Painter",
    desc: "Seeking a skilled painter for a residential project. Must be able to work with various paint types and finishes. Experience with both interior and exterior painting required.",
    skills: ["Painting", "Color Mixing", "Surface Preparation"],
    address: "22 5th Street, Parklands, Cape Town",
    status: "ongoing",
  },
  {
    id: 3,
    user: {
      id: 3,
      firstName: "David",
      surname: "Brown",
      address: "45 Greenview Avenue, Randburg, Johannesburg",
    },
    jobType: "Graphic Designer",
    desc: "Looking for a creative graphic designer to develop branding materials and digital assets for a marketing campaign. Must have experience with Adobe Creative Suite and a strong portfolio showcasing design skills.",
    skills: ["Adobe Creative Suite", "Brand Identity", "Digital Illustration"],
    address: "45 Greenview Avenue, Randburg, Johannesburg",
    status: "finished",
  },
  {
    id: 4,
    user: {
      id: 4,
      firstName: "Emma",
      surname: "Wilson",
      address: "8 Willow Lane, Durbanville, Cape Town",
    },
    jobType: "Bricklayer",
    desc: "In need of a skilled bricklayer to construct a patio and garden walls. Must be experienced in laying bricks and working with mortar. Ability to create intricate patterns is a plus.",
    skills: ["Bricklaying", "Masonry", "Pattern Design"],
    address: "8 Willow Lane, Durbanville, Cape Town",
    status: "finished",
  },
  {
    id: 5,
    user: {
      id: 5,
      firstName: "Michael",
      surname: "Johnson",
      address: "12 Oak Street, Claremont, Cape Town",
    },
    jobType: "Plumber",
    desc: "Seeking a certified plumber to install fixtures and repair plumbing systems in a commercial building. Must have knowledge of building codes and experience in troubleshooting.",
    skills: ["Plumbing Installation", "Pipe Repair", "Building Codes"],
    address: "12 Oak Street, Claremont, Cape Town",
    status: "finished",
  },
  {
    id: 6,
    user: {
      id: 6,
      firstName: "Sophia",
      surname: "Lee",
      address: "17 Pineapple Road, Umhlanga, Durban",
    },
    jobType: "Accountant",
    desc: "Seeking an experienced accountant to manage financial records and prepare tax documents for a small business. Must have knowledge of accounting principles and experience with accounting software.",
    skills: ["Financial Reporting", "Tax Preparation", "Accounting Software"],
    address: "17 Pineapple Road, Umhlanga, Durban",
    status: "ongoing",
  },
  {
    id: 7,
    user: {
      id: 7,
      firstName: "Oliver",
      surname: "Garcia",
      address: "9 Cherry Avenue, Fourways, Johannesburg",
    },
    jobType: "Electrician",
    desc: "Hiring an electrician to install wiring and troubleshoot electrical issues in a residential property. Must be licensed and familiar with safety regulations.",
    skills: ["Electrical Wiring", "Safety Standards", "Troubleshooting"],
    address: "9 Cherry Avenue, Fourways, Johannesburg",
    status: "ongoing",
  },
  {
    id: 8,
    user: {
      id: 8,
      firstName: "Isabella",
      surname: "Martinez",
      address: "33 Maple Street, Stellenbosch, Cape Town",
    },
    jobType: "Landscaper",
    desc: "Looking for a skilled landscaper to design and maintain gardens for residential properties. Must have knowledge of plants, irrigation systems, and landscaping techniques.",
    skills: ["Garden Design", "Plant Care", "Irrigation Systems"],
    address: "33 Maple Street, Stellenbosch, Cape Town",
    status: "ongoing",
  },
  {
    id: 9,
    user: {
      id: 9,
      firstName: "William",
      surname: "Hernandez",
      address: "7 Sunflower Road, Bryanston, Johannesburg",
    },
    jobType: "Mechanic",
    desc: "Seeking an experienced mechanic to perform routine maintenance and repairs on vehicles. Must have diagnostic skills and familiarity with automotive systems.",
    skills: ["Automotive Repair", "Diagnostic Tools", "Vehicle Maintenance"],
    address: "7 Sunflower Road, Bryanston, Johannesburg",
    status: "ongoing",
  },
  {
    id: 10,
    user: {
      id: 10,
      firstName: "Charlotte",
      surname: "Lopez",
      address: "14 Rose Lane, Morningside, Durban",
    },
    jobType: "Carpenter",
    desc: "In need of a skilled carpenter to build custom furniture and cabinets for a residential project. Must have expertise in woodworking and the ability to interpret blueprints.",
    skills: ["Carpentry", "Woodworking", "Blueprint Interpretation"],
    address: "14 Rose Lane, Morningside, Durban",
    status: "ongoing",
  },
  {
    id: 11,
    user: {
      id: 11,
      firstName: "Daniel",
      surname: "Gonzalez",
      address: "6 Pine Street, Somerset West, Cape Town",
    },
    jobType: "Tiler",
    desc: "Seeking a tiler to lay tiles in a bathroom and kitchen renovation project. Must have experience in tile cutting and grouting.",
    skills: ["Tile Installation", "Grouting", "Tile Cutting"],
    address: "6 Pine Street, Somerset West, Cape Town",
    status: "ongoing",
  },
  {
    id: 12,
    user: {
      id: 12,
      firstName: "Emily",
      surname: "Perez",
      address: "11 Magnolia Road, Green Point, Cape Town",
    },
    jobType: "Gardener",
    desc: "Looking for a gardener to maintain lawns and gardens for a residential property. Must have knowledge of plant care and landscaping.",
    skills: ["Lawn Maintenance", "Planting", "Landscaping"],
    address: "11 Magnolia Road, Green Point, Cape Town",
    status: "ongoing",
  },
];

export const userProjects = [
  {
    id: 1,
    employer: {
      firstName: "John",
      lastName: "Doe",
      // Add more employer details as needed
    },
    jobDescription: "Build a website",
    jobType: "Web Development",
    jobAmount: 1000, // Amount in currency (e.g., USD)
    jobStatus: "inProgress", // Can be "Done", "inProgress", "Not Started", etc.
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "California",
      country: "USA",
      // Add more address details as needed
    },
  },
  {
    id: 2,
    employer: {
      firstName: "Alice",
      lastName: "Smith",
      // Add more employer details as needed
    },
    jobDescription: "Graphic design for brochure",
    jobType: "Graphic Design",
    jobAmount: 500, // Amount in currency (e.g., USD)
    jobStatus: "Not Started", // Can be "Done", "inProgress", "Not Started", etc.
    address: {
      street: "456 Elm St",
      city: "Another Town",
      state: "New York",
      country: "USA",
      // Add more address details as needed
    },
  },
  {
    id: 3,
    employer: {
      firstName: "Emily",
      lastName: "Johnson",
      // Add more employer details as needed
    },
    jobDescription: "Mobile app development",
    jobType: "App Development",
    jobAmount: 1500, // Amount in currency (e.g., USD)
    jobStatus: "inProgress", // Can be "Done", "inProgress", "Not Started", etc.
    address: {
      street: "789 Oak St",
      city: "Another City",
      state: "Texas",
      country: "USA",
      // Add more address details as needed
    },
  },
  {
    id: 4,
    employer: {
      firstName: "Michael",
      lastName: "Brown",
      // Add more employer details as needed
    },
    jobDescription: "Content writing for blog",
    jobType: "Content Writing",
    jobAmount: 200, // Amount in currency (e.g., USD)
    jobStatus: "Done", // Can be "Done", "inProgress", "Not Started", etc.
    address: {
      street: "101 Pine St",
      city: "Some City",
      state: "Florida",
      country: "USA",
      // Add more address details as needed
    },
  },
  {
    id: 5,
    employer: {
      firstName: "Sophia",
      lastName: "Miller",
      // Add more employer details as needed
    },
    jobDescription: "Logo design for company",
    jobType: "Graphic Design",
    jobAmount: 300, // Amount in currency (e.g., USD)
    jobStatus: "Not Started", // Can be "Done", "inProgress", "Not Started", etc.
    address: {
      street: "222 Cedar St",
      city: "Another City",
      state: "California",
      country: "USA",
      // Add more address details as needed
    },
  },
  {
    id: 6,
    employer: {
      firstName: "David",
      lastName: "Wilson",
      // Add more employer details as needed
    },
    jobDescription: "SEO optimization for website",
    jobType: "Digital Marketing",
    jobAmount: 400, // Amount in currency (e.g., USD)
    jobStatus: "inProgress", // Can be "Done", "inProgress", "Not Started", etc.
    address: {
      street: "444 Maple St",
      city: "Some Town",
      state: "Washington",
      country: "USA",
      // Add more address details as needed
    },
  },
  {
    id: 7,
    employer: {
      firstName: "Olivia",
      lastName: "Jones",
      // Add more employer details as needed
    },
    jobDescription: "Data entry for project",
    jobType: "Data Entry",
    jobAmount: 100, // Amount in currency (e.g., USD)
    jobStatus: "Not Started", // Can be "Done", "inProgress", "Not Started", etc.
    address: {
      street: "555 Walnut St",
      city: "Another Town",
      state: "New Jersey",
      country: "USA",
      // Add more address details as needed
    },
  },
];

// Array of articles
export const articles = [
  {
    id: 1,
    title: "The Importance of Regular Exercise",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    createdAt: "2024-02-05T08:00:00Z", // Example date format: ISO 8601
  },
  {
    id: 2,
    title: "Tips for a Healthy Diet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    createdAt: "2024-02-05T09:00:00Z", // Example date format: ISO 8601
  },
  {
    id: 3,
    title: "Stress Management Techniques",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    createdAt: "2024-02-05T10:00:00Z", // Example date format: ISO 8601
  },
  {
    id: 4,
    title: "Benefits of Meditation",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    createdAt: "2024-02-05T11:00:00Z", // Example date format: ISO 8601
  },
  {
    id: 5,
    title: "Healthy Sleeping Habits",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    createdAt: "2024-02-05T12:00:00Z", // Example date format: ISO 8601
  },
  {
    id: 6,
    title: "Importance of Hydration",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    createdAt: "2024-02-05T13:00:00Z", // Example date format: ISO 8601
  },
  {
    id: 7,
    title: "Mindfulness in Everyday Life",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    createdAt: "2024-02-05T14:00:00Z", // Example date format: ISO 8601
  },
  {
    id: 8,
    title: "The Power of Positive Thinking",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    createdAt: "2024-02-05T15:00:00Z", // Example date format: ISO 8601
  },
  {
    id: 9,
    title: "Benefits of a Balanced Diet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    createdAt: "2024-02-05T16:00:00Z", // Example date format: ISO 8601
  },
  {
    id: 10,
    title: "Effective Time Management Strategies",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    createdAt: "2024-02-05T17:00:00Z", // Example date format: ISO 8601
  },
];

// Array of team members
export const team = [
  {
    name: "Bonnie Green",
    profilePhoto: "/avatar-3.png",
    role: "CEO & Web Developer",
    about:
      "Bonnie drives the technical strategy of the Jobit platform and brand.",
  },
  {
    name: "John Doe",
    profilePhoto: "/avatar-3.png",
    role: "CTO & Software Engineer",
    about:
      "John oversees the development and implementation of Jobit's software solutions.",
  },
  {
    name: "Alice Smith",
    profilePhoto: "/avatar-3.png",
    role: "UI/UX Designer",
    about:
      "Alice is responsible for creating intuitive and visually appealing user interfaces.",
  },
  {
    name: "David Johnson",
    profilePhoto: "/avatar-3.png",
    role: "Marketing Manager",
    about:
      "David leads the marketing efforts to promote Jobit's products and services.",
  },
];

export const AdminLinks = [
  {
    title: "Dashboard",
    link: "/admin-panel",
    icon: <MdOutlineDashboardCustomize />,
  },
  {
    title: "Users",
    link: "/admin-panel/users",
    icon: <FaUserFriends />,
  },
  {
    title: "Users Map",
    link: "/admin-panel/users/map",
    icon: <FaMapMarkedAlt />,
  },
  {
    title: "Projects",
    link: "/admin-panel/projects",
    icon: <GrProjects />,
  },
  {
    title: "Freelancers",
    link: "/admin-panel/freelancers",
    icon: <SiFreelancer />,
  },
  {
    title: "Inbox",
    link: "/admin-panel/inbox",
    icon: <FaInbox />,
  },
];
export const Others = [
  {
    title: "Settings",
    link: "/admin-panel/settings",
    icon: <MdSettings />,
  },
  {
    title: "Schedules",
    link: "/admin-panel/schedules",
    icon: <AiFillSchedule />,
  },
  {
    title: "Reports",
    link: "/admin-panel/reports",
    icon: <TbMessageReport />,
  },
  {
    title: "Invoices",
    link: "/admin-panel/invoices",
    icon: <FaFileInvoiceDollar />,
  },
  {
    title: "Subscriptions",
    link: "/admin-panel/subscriptions",
    icon: <MdSubscriptions />,
  },
];
export const recentUsers = [
  {
    name: "Olivia Martin",
    email: "olivia.martin@email.com",
    createdAt: "2024-02-08T12:00:00Z", // Sample createdAt date
  },
  {
    name: "John Doe",
    email: "john.doe@email.com",
    createdAt: "2024-02-07T15:30:00Z", // Sample createdAt date
  },
  {
    name: "Jane Smith",
    email: "jane.smith@email.com",
    createdAt: "2024-02-06T09:45:00Z", // Sample createdAt date
  },
  {
    name: "Michael Johnson",
    email: "michael.johnson@email.com",
    createdAt: "2024-02-05T18:20:00Z", // Sample createdAt date
  },
  // Add more users as needed
];

export const users = [
  { name: "David", lat: -26.2041, lng: 28.0473 }, // Johannesburg CBD
  { name: "Sarah", lat: -26.1076, lng: 28.0567 }, // Sandton
  { name: "James", lat: -26.1935, lng: 28.0339 }, // Rosebank
  { name: "Linda", lat: -26.0114, lng: 28.0138 }, // Soweto
  { name: "Peter", lat: -26.1108, lng: 28.0547 }, // Fourways
  { name: "Emily", lat: -26.1454, lng: 28.0315 }, // Randburg
  { name: "Michael", lat: -26.2045, lng: 28.0416 }, // Parktown
  { name: "Sophia", lat: -26.1633, lng: 27.9961 }, // Midrand
  { name: "Daniel", lat: -26.107, lng: 28.0573 }, // Sandhurst
  { name: "Jessica", lat: -26.1059, lng: 28.053 }, // Illovo
  { name: "Ryan", lat: -26.1186, lng: 28.0401 }, // Melrose Arch
  { name: "Megan", lat: -26.135, lng: 28.0624 }, // Bryanston
  // Additional users with different provinces
  { name: "John", lat: -33.9249, lng: 18.4241 }, // Cape Town, Western Cape
  { name: "Mark", lat: -29.8587, lng: 31.0218 }, // Durban, KwaZulu-Natal
  { name: "Rachel", lat: -33.964, lng: 22.459 }, // George, Western Cape
  { name: "Elizabeth", lat: -29.1201, lng: 26.214 },
  { name: "Andrew", lat: -26.2708, lng: 28.1123 },
  { name: "William", lat: -33.3528, lng: 22.5597 },
  { name: "Mary", lat: -26.6296, lng: 27.9712 },
  { name: "Patricia", lat: -30.5595, lng: 22.9375 },
  { name: "Jennifer", lat: -28.5693, lng: 29.7763 },
  { name: "Richard", lat: -26.7107, lng: 27.8378 },
];

// pk.eyJ1IjoiY2F1dGllbiIsImEiOiJjbHNoamlxZG4wZTJnMmxwbmYyZ3FucTcxIn0.iriupgOP4c4hZjNiVIQ8fA
export const allUsers = [
  {
    firstName: "John",
    lastName: "Doe",
    address: "123 Main St",
    phoneNumber: "123-456-7890",
    role: "basic",
    active: true,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    address: "456 Elm St",
    phoneNumber: "234-567-8901",
    role: "basic",
    active: true,
  },
  {
    firstName: "Michael",
    lastName: "Johnson",
    address: "789 Oak St",
    phoneNumber: "345-678-9012",
    role: "basic",
    active: true,
  },
  {
    firstName: "Emily",
    lastName: "Brown",
    address: "101 Pine St",
    phoneNumber: "456-789-0123",
    role: "basic",
    active: true,
  },
  {
    firstName: "David",
    lastName: "Wilson",
    address: "222 Maple St",
    phoneNumber: "567-890-1234",
    role: "basic",
    active: true,
  },
  {
    firstName: "Sarah",
    lastName: "Taylor",
    address: "333 Cedar St",
    phoneNumber: "678-901-2345",
    role: "basic",
    active: true,
  },
  {
    firstName: "Robert",
    lastName: "Martinez",
    address: "444 Birch St",
    phoneNumber: "789-012-3456",
    role: "basic",
    active: true,
  },
  {
    firstName: "Jennifer",
    lastName: "Anderson",
    address: "555 Walnut St",
    phoneNumber: "890-123-4567",
    role: "basic",
    active: true,
  },
  {
    firstName: "William",
    lastName: "Thomas",
    address: "666 Spruce St",
    phoneNumber: "901-234-5678",
    role: "basic",
    active: true,
  },
  {
    firstName: "Laura",
    lastName: "Garcia",
    address: "777 Fir St",
    phoneNumber: "012-345-6789",
    role: "basic",
    active: true,
  },
  {
    firstName: "Daniel",
    lastName: "Lopez",
    address: "888 Oak St",
    phoneNumber: "123-456-7890",
    role: "admin",
    active: true,
  },
  // Add more users as needed
];
