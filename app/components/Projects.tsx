import { Project } from "@prisma/client";
import { Link, Outlet } from "@remix-run/react";
import { getProjectListItems } from "~/models/project.server";

type Props = {
  projects: Awaited<ReturnType<typeof getProjectListItems>>;
};

const Projects = ({ projects }: Props) => {
  return (
    <section className="container max-w-7xl px-3 m-auto">
      <h2 className="font-bold text-3xl mb-12">Mes projets</h2>
      <div className="flex gap-20 flex-col mb-20">
        {projects[1].map((project, index) => (
          <div
            className={`w-full flex gap-5 justify-between ${
              index % 2 ? "flex-row" : "flex-row-reverse"
            }`}
            key={project.id}
          >
            <Link
              to={`/project/${project.uuid}`}
              prefetch="intent"
              className="w-2/5"
            >
              <img
                src="https://media-exp1.licdn.com/dms/image/C4E03AQH-uTfLCIL1DA/profile-displayphoto-shrink_800_800/0/1653316104518?e=1671062400&v=beta&t=kRMaWCxK8t8vAJOIvRS_UezpcCKBPvnIAfnw7XljyU0"
                className="aspect-[6/4] object-cover rounded-3xl outline-gray-500 outline-[5px] hover:outline outline-offset-4 hover:animate-ping-hover hover:shadow-2xl"
                style={
                  {
                    "--tw-shadow-color": project.color || undefined,
                    outlineColor: project.color || undefined,
                  } as React.CSSProperties
                }
                alt=""
              />
              {/* <Link to={`/projects/${project.uuid}`} prefetch="render">
              {project.name}*/}
            </Link>
            <div className="w-2/5 pt-8">
              <p className="text-2xl font-bold uppercase mb-2">
                {project.name}
              </p>
              <p className="mb-4">{project.description}</p>
              <p className="font-semibold uppercase mb-2">Technologies :</p>
              <div className="flex gap-2">
                {project.projectTechnologies.map(({ technology }) => (
                  <Link
                    to={`/technology/${technology.uuid}`}
                    className={`py-1 px-3 rounded-full text-white bg-sky-500`}
                    style={{
                      backgroundColor:
                        technology.color || project.color || undefined,
                    }}
                    key={technology.uuid}
                  >
                    {technology.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
