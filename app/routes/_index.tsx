import { type LoaderFunctionArgs, type MetaFunction } from "@remix-run/node";
import { requireSession } from "~/session";

export const meta: MetaFunction = () => {
  return [
    { title: "Easy Notes - Home" },
    { name: "description", content: "Welcome to Easy Notes!" },
  ];
};

export default function Index() {
  return <div></div>;
}

export async function Loader({ request }: LoaderFunctionArgs) {
  return await requireSession(request);
}
