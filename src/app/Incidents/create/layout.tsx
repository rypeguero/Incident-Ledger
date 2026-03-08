import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Incident",
};

export default function CreateIncidentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
