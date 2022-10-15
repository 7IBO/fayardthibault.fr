import { Project } from "@prisma/client";
import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Hero from "~/components/Hero";
import Projects from "~/components/Projects";
import { createProject, getProjectListItems } from "~/models/project.server";
import { prisma } from "~/utils/prisma.server";

type LoaderData = {
  projects: Awaited<ReturnType<typeof getProjectListItems>>;
};

export const loader: LoaderFunction = async () => {
  const projects = await getProjectListItems({});
  return json<LoaderData>({ projects });
};

const Index = () => {
  const { projects } = useLoaderData() as LoaderData;

  return (
    <>
      <Hero />
      <Projects projects={projects} />
    </>
  );
};

export default Index;
