import type { Project, Technology } from "@prisma/client";

import { prisma } from "~/utils/prisma.server";

export type { Project } from "@prisma/client";

export function getProject ({ id, uuid }: Pick<Project, "id" | "uuid">) {
  return prisma.project.findFirst({
    where: { id, uuid },
  });
}

export function getProjectListItems ({
  cursor,
  take = 20,
}: {
  cursor?: string;
  take?: number;
}) {
  return prisma.$transaction([
    prisma.project.count(),
    prisma.project.findMany({
      cursor: cursor ? { id: cursor } : undefined,
      take,
      select: { id: true, uuid: true, name: true, description: true, color: true, githubUrl: true, technologies: { select: { uuid: true, name: true, icon: true, color: true } } },
      orderBy: { updatedAt: "desc" },
    })
  ])


}

export function createProject ({
  name,
  isPersonal,
  isPublic,
  experienceId,
  githubUrl,
  technologyIds,
  url,
}: {
  technologyIds: Project[ "technologyIds" ];
  name: Project[ "name" ];
  isPublic: Project[ "isPublic" ];
  isPersonal: Project[ "isPersonal" ];
  experienceId?: Project[ "experienceId" ];
  url?: Project[ "url" ];
  githubUrl?: Project[ "githubUrl" ];
}) {
  return prisma.project.create({
    data: {
      name,
      isPersonal,
      isPublic,
      experienceId,
      githubUrl,
      technologyIds,
      url,
    },
  });
}

export function deleteProject ({ id, uuid }: Pick<Project, "uuid" | "id">) {
  return prisma.project.deleteMany({
    where: { id, uuid },
  });
}
