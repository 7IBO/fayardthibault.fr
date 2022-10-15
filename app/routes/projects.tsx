import { Project } from "@prisma/client";
import { LoaderFunction, json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { getProjectListItems } from "~/models/project.server";
import ProjectLayout from "~/routes/zear";

type LoaderData = {
  projects: Awaited<ReturnType<typeof getProjectListItems>>;
};

export const loader: LoaderFunction = async () => {
  const projects = await getProjectListItems({});
  return json<LoaderData>({ projects });
};

const Projects = () => {
  const { projects } = useLoaderData() as LoaderData;
  return (
    <section className="container m-auto pt-24">
      <h2 className="font-bold text-3xl">Mes projets</h2>
      <div className="flex gap-2">
        <div className="w-2/5 ">
          {projects.map((project) => (
            <div className="w-full text-ellipsis py-4 px-6 text-xl shadow-md rounded-lg bg-slate-100">
              <Link to={`/projects/${project.uuid}`} prefetch="render">
                {project.name}
              </Link>
            </div>
          ))}
        </div>
        <div className="w-3/5">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Projects;
