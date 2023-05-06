import Layout from "$components/layouts/dafult/index.tsx";
import IconExternalLink from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/external-link.tsx";
import { Head } from "$fresh/runtime.ts";

const About = () => {
  return (
    <>
      <Head>
        <title>Deno jobs - About</title>
      </Head>
      <Layout>
        <div
          class={`
            h-full max-w-4xl
            py-10 mx-auto
            flex justify-center items-center
          `}
        >
          <div class={`w-full flex flex-col`}>
            <div class={`px-2 py-3`}>
              <span class={`text-xl font-bold`}>
                About
              </span>
              <br />
              <span>
                A small site that collects vacancies in any way related to Deno.<br />
                All vacancies presented on this site have been taken from publicly available sources.
              </span>
            </div>
            <div class={`px-2 py-3`}>
              <span class={`text-xl font-bold`}>
                Add a vacancy
              </span>
              <br />
              <span>
                To add your vacancy, send information about the vacancy to the email or open an issue on Github<br />
                <br />
                Email: <a
                  class={`
                    hover:text-blue-600
                    cursor-pointer
                    transition-colors duration-150
                  `}
                  href="mailto:denojobs@proton.me"
                >
                denojobs@proton.me&nbsp;<IconExternalLink class={`w-3.5 h-3.5 inline align-baseline`} />
                </a><br />
                Issues: <a
                  class={`
                    hover:text-blue-600
                    cursor-pointer
                    transition-colors duration-150
                  `}
                  href="https://github.com/VofSwords/deno-jobs/issues"
                  target="_blank"
                >
                  https://github.com/VofSwords/deno-jobs/issues&nbsp;<IconExternalLink class={`w-3.5 h-3.5 inline align-baseline`} />
                </a><br />
                <br />
                Submit your company name, job title, and a link to the posted vacancy
              </span>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
export default About;
