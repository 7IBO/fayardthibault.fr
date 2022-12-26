import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import AppConstruction from "./components/ui/construction/AppConstruction";
import Header from "./components/ui/layouts/header/Header";
import { WEBSITE_STATUS } from "./config/constants";
import styles from "./styles/app.css";

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/assets/favicon/apple-touch-icon.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/assets/favicon/favicon-32x32.png",
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/assets/favicon/favicon-16x16.png",
    },
    {
      rel: "icon",
      type: "image/x-icon",
      href: "/assets/favicon/favicon.ico",
    },
    { rel: "manifest", href: "/assets/favicon/manifest.json" },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Portfolio - Thibault Fayard",
  viewport: "width=device-width,initial-scale=1",
  description:
    "Développeur Web Junior spécialisé dans les technologies JavaScript, principalement sur la librairie React & frameworks associés (ex: Next.js, Remix.run)",
});

const App = () => {
  return (
    <html lang="fr">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-900 text-white">
        <AppView />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
};

const AppView = () => {
  if (WEBSITE_STATUS === "construction") {
    return <AppConstruction />;
  }

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
