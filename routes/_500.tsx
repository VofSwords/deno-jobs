import Layout from "$components/layouts/dafult/index.tsx";
import Button from "$components/global/button.tsx";
import { Head } from "$fresh/runtime.ts";
import { ErrorPageProps } from "$fresh/server.ts";
import IconAlien from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/alien.tsx";

const Home = ({ url }: ErrorPageProps) => {
  return (
    <>
      <Head>
        <title>Error - Deno jobs</title>
      </Head>
      <Layout>
        <div
          class={`
            h-full w-full
            flex flex-col
            justify-center items-center
          `}
        >
          <IconAlien class={`h-24 w-24 my(4 lg:6)`} />
          <span class={`text(2xl lg:4xl) my(1 lg:2)`}>
            Aliens invaded our servers
          </span>
          <span class={`text(sm lg:base) text-gray-500`}>
            Try to come back later
          </span>
          <Button class={`my-1`} href={url.pathname} target="_self">
            Refresh
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default Home;
