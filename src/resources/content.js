import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Bantu-Sphere",
  lastName: "Wallet",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Digital Wallet Platform",
  avatar: "/images/avatar.jpg",
  email: "support@bantu-sphere.com",
  location: "Africa/Harare", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Shona"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Stay Updated with Bantu-Sphere</>,
  description: (
    <>
      Get the latest updates on new features, security enhancements, and tips for managing your digital wallet effectively.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/bantu-sphere/wallet",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/bantu-sphere/",
  },
  {
    name: "Support",
    icon: "help",
    link: "https://support.bantu-sphere.com",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:support@bantu-sphere.com`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `Bantu-Sphere Wallet - Your Money, Simplified`,
  description: `Securely manage your funds, send and receive payments, and track your financial journey`,
  headline: <>Your Money, Simplified. Welcome to Bantu-Sphere.</>,
  featured: {
    display: true,
    title: <>Current Balance: <strong className="ml-4">ZWL 0.00</strong></>,
    href: "/dashboard",
  },
  subline: (
    <>
      Securely manage your funds, send and receive payments, and track your financial journey with Bantu-Sphere.
      <br /> Your trusted digital wallet solution.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About Bantu-Sphere Wallet`,
  description: `Learn more about Bantu-Sphere's secure digital wallet solution`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "About Bantu-Sphere",
    description: (
      <>
        Bantu-Sphere is a secure digital wallet solution designed to simplify financial transactions.
        Our platform enables users to send, receive, and manage their funds with confidence and ease.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Platform Development",
    experiences: [
      {
        company: "Bantu-Sphere Technologies",
        timeframe: "2023 - Present",
        role: "Lead Platform Developer",
        achievements: [
          <>
            Developed the core wallet infrastructure, enabling secure transactions with 99.9% uptime
            and sub-3-second processing times.
          </>,
          <>
            Implemented advanced security protocols including multi-factor authentication and
            real-time fraud detection, protecting over $10M in user funds.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Bantu-Sphere Wallet Platform",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Bantu-Sphere Security",
        timeframe: "2022 - 2023",
        role: "Security Engineer",
        achievements: [
          <>
            Built the foundational security architecture that protects user data and transactions
            with bank-level encryption standards.
          </>,
          <>
            Led the team that achieved compliance with international financial regulations across
            multiple jurisdictions in Africa.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Credentials & Certifications",
    institutions: [
      {
        name: "African Financial Technology Institute",
        description: <>Specialized in digital payment systems and blockchain security.</>,
      },
      {
        name: "International Banking Security Certification",
        description: <>Certified in financial regulations and compliance standards across African markets.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical Capabilities",
    skills: [
      {
        title: "Blockchain Security",
        description: <>Advanced blockchain technology implementation with bank-level security protocols for secure transactions.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Blockchain Security Infrastructure",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Security Dashboard",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Payment Processing",
        description: <>Real-time payment processing with multi-currency support and instant settlement capabilities.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Payment Processing System",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const dashboard = {
  path: "/dashboard",
  label: "Dashboard",
  title: `Dashboard – Bantu-Sphere Wallet`,
  description: `Manage your funds and view account overview`,
};

const send = {
  path: "/send",
  label: "Send",
  title: `Send Money – Bantu-Sphere Wallet`,
  description: `Send payments to other wallets`,
};

const receive = {
  path: "/receive",
  label: "Receive",
  title: `Receive Money – Bantu-Sphere Wallet`,
  description: `Receive payments from other users`,
};

const history = {
  path: "/history",
  label: "History",
  title: `Transaction History – Bantu-Sphere Wallet`,
  description: `View your transaction history and records`,
};

const profile = {
  path: "/profile",
  label: "Profile", 
  title: `Profile Settings – Bantu-Sphere Wallet`,
  description: `Manage your account settings and preferences`,
};

const blog = {
  path: "/blog",
  label: "Updates",
  title: "Latest Updates & Security News",
  description: `Stay informed about Bantu-Sphere wallet updates, security enhancements, and financial tips`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Features",
  title: `Wallet Features – Bantu-Sphere`,
  description: `Explore the powerful features that make Bantu-Sphere your trusted digital wallet`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Security Features – Bantu-Sphere Wallet`,
  description: `Visual showcase of our security measures and wallet interface`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "Wallet Security Dashboard",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "Transaction History Interface",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "Multi-Currency Exchange",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "Mobile Wallet App",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "Payment Processing",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "Security Protocols",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "User Authentication",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "Financial Analytics",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, dashboard, send, receive, history, profile, blog, work, gallery };
