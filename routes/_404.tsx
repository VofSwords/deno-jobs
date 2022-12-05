import IconMap from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/map-2.tsx";
import Layout from "$components/layouts/dafult/index.tsx";
import Button from "$components/global/button.tsx";
import { Head } from "$fresh/runtime.ts";
import { UnknownPageProps } from "$fresh/server.ts";

const NotFoundPage = ({ url }: UnknownPageProps) => {
  return (
    <>
      <Head>
        <title>Not Found - Deno jobs</title>
      </Head>
      <Layout>
        <div
          class={`
            h-full w-full
            flex flex-col
            justify-center items-center
          `}
        >
          <IconMap class={`h-24 w-24 my(4 lg:6)`} />
          <span class={`text(2xl lg:4xl) my(1 lg:2)`}>
            Looks like we got lost
          </span>
          <span class={`text(sm lg:base) text-gray-500`}>
            404 not found: {url.pathname}
          </span>
          <Button class={`my-1`} href="/" target="_self">
            Home
          </Button>
        </div>
      </Layout>
    </>
  );
};

export default NotFoundPage;
