import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Easy Notes - Home" },
    { name: "description", content: "Welcome to Easy Notes!" },
  ];
};

export default function Index() {
  return <div></div>;
}

