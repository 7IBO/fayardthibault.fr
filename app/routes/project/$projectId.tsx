import type { ActionFunction, LoaderFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useCatch, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";

import type { Project } from "~/models/project.server";
import { getProject } from "~/models/project.server";

type LoaderData = {
  project: Project;
};

export const loader: LoaderFunction = async ({ request, params }) => {
  invariant(params.projectId, "noteId not found");

  const project = await getProject({ uuid: params.projectId });
  if (!project) {
    throw new Response("Not Found", { status: 404 });
  }
  return json<LoaderData>({ project });
};

export default function NoteDetailsPage() {
  const data = useLoaderData() as LoaderData;

  return (
    <div>
      <h3 className="text-2xl font-bold">{data.project.name}</h3>
      <p className="py-6">{data.project.description}</p>
      <hr className="my-4" />
      <Form method="post">
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:bg-blue-400"
        >
          Delete
        </button>
      </Form>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return <div>An unexpected error occurred: {error.message}</div>;
}

export function CatchBoundary() {
  const caught = useCatch();

  if (caught.status === 404) {
    return <div>Note not found</div>;
  }

  throw new Error(`Unexpected caught response with status: ${caught.status}`);
}