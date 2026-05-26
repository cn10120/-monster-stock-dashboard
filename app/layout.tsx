import "./globals.css";

export const metadata = {
  title: "Monster Stock OS",
  description: "AI investing dashboard"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}