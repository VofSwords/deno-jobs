import { ComponentChildren } from "preact";
import FooterBage from "./footerBage.tsx";
import FreshLogo from "../../icons/fresh.tsx";
import GithubLogo from "../../icons/github.tsx";
import VofSwordsLogo from "../../icons/vofswords.tsx";

const Layout = ({ children }: { children: ComponentChildren }) => {
  const headerHeight = '60px';
  const vofSwordsHref = 'https://vofswords.deno.dev/';
  const sourceHref = 'https://github.com/VofSwords/deno-jobs';
  const freshHref = 'https://fresh.deno.dev';
  return <div>
    <header class={`fixed h-[${headerHeight}] w-full px(4 sm:10 lg:12) bg-white`}>
      <div class={`h-full -mx-8 flex items-center`}>
        <div class={`px-8`}>
          <span class={`text-xl`}>
            Deno Jobs
          </span>
        </div>
      </div>
    </header>
    <div class={`min-h-screen pt-[${headerHeight}] mb(40 sm:32 md:24 lg:16) bg-white flex items-stretch`}>
      <div class={`flex-grow`}>
        { children }
      </div>
    </div>
    <footer class={`
      w-full
      fixed bottom-0 -z-10
      h(40 sm:32 md:24 lg:16)
      px(10 sm:16 lg:20)
      py(0 sm:4 lg:2)
      bg-gray-100
    `}>
      <div
        class={`
          h-full -mx-2
          flex flex-wrap
          flex(col sm:row)
          items(stretch sm:center)
          justify(center lg:end)
        `}
      >
        <FooterBage className={`px-2 py-1`} color="#fbbf24" icon={<VofSwordsLogo />} href={vofSwordsHref}>
          VofSwords
        </FooterBage>
        <FooterBage className={`px-2 py-1`} color="#0969da" icon={<GithubLogo />} href={sourceHref}>
          Source
        </FooterBage>
        <FooterBage className={`px-2 py-1`} color="#4ade80" icon={<FreshLogo />} href={freshHref}>
          It's <strong>Fresh</strong> here
        </FooterBage>
      </div>
    </footer>
  </div>
}

export default Layout;
