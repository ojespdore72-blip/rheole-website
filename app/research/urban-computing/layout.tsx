import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Urban Computing | Rheole Research",
  description: "A city is more than its streets. Understanding the digital pulse of Bengaluru through Urban Computing.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
