import "./index.css";

export const metadata = {
  title: "Damisa Alex",
  description: "Damisa Alex Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
