import "./globals.css";

export const metadata = {
  title: "Shalini Bhadouriya | Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
