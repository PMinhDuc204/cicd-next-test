type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return [
    { slug: "hello-world" },
    { slug: "nextjs-tutorial" },
    { slug: "welcome" },
  ];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params) {
  const { slug } = await params;

  return {
    title: `Post: ${slug}`,
  };
}

export default async function Page({ params }: Params) {
  const { slug } = await params;

  return (
    <>
      <h1>Slug: {slug}</h1>
      <p>This is the post content.</p>
      <p>Welcome to the post!</p>
    </>
  );
}
