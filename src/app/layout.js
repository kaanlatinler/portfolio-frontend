import Script from "next/script";

export const metadata = {
  title: "Kaan Latinler",
  description: "Kaan Latinler Portfoilo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr">
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
      </head>
      <body>
        <i className="bi bi-list mobile-nav-toggle d-lg-none"></i>
        {children}
      </body>
    </html>
  );
}
