import Layout from "$components/layouts/dafult/index.tsx";
import { Head } from "$fresh/runtime.ts";
import { Handler, PageProps } from "$fresh/server.ts";
import VacancyListIsland, { 
  VacancyListProps,
  useVacancyListIsland
} from "$islands/HomeVacancyList.tsx";

export const handler: Handler = async (_req, ctx) => {
  const vacancyList = await useVacancyListIsland();
  
  return ctx.render({ vacancyList });
}

const Home = ({ data }: PageProps<{ vacancyList: VacancyListProps }>) => {
  return <>
    <Head>
      <title>Deno jobs</title>
    </Head>
    <Layout>
      <div class={`
        h-full max-w-4xl
        py-10 mx-auto
        flex justify-center items-center
      `}>
        <VacancyListIsland { ...data.vacancyList } />
      </div>
    </Layout>
  </>;
}

export default Home;
