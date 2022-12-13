import { notFound } from "next/navigation";

type PageProps = {
  params: {
    slug: string[];
  };
};

export default function Page({ params }: PageProps) {
  if (!params.slug.includes("dan")) {
    notFound();
  }
  return <p>This route is valid</p>;
}
