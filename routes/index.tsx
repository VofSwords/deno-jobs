import Layout from "../components/layouts/dafult/index.tsx";
import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return <>
    <Head>
      <title>Deno jobs</title>
    </Head>
    <Layout>
      <div class={`h-full flex justify-center items-center`}>
        <h1 class={`text(2xl md:4xl) font-bold`}>
          October 2022
        </h1>
      </div>
    </Layout>
  </>;
}
