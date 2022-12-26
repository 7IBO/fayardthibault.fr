import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Hero from "~/components/Hero";

const Index = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Index;
