import Favicon from "/public/images/favicon.png";
import ClientRootLayout from "../components/ClientRootLayout";

export const metadata = {
  title: "Muhammad Naseem | Software Engineer",
  description:
    "Welcome to Muhammad's Software Engineering Portfolio. Explore a diverse range of projects and see how I can bring your ideas to life. Let's connect and discuss our next venture!",
  keywords: [
    "portfolio",
    "app",
    "next.js 13",
    "sass",
    "scss",
    "react",
    "best portfolio",
    "best portfolio website",
  ],
  icons: [
    {
      rel: "icon",
      url: Favicon.src,
    },
  ],
};

export default function RootLayout({ children }) {
  return <ClientRootLayout>{children}</ClientRootLayout>;
}
