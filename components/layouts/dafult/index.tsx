import IconBrandDeno from "https://deno.land/x/tabler_icons_tsx@0.0.2/tsx/brand-deno.tsx";
import IconPlus from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/plus.tsx";
import { ComponentChildren } from "preact";
import FooterBage from "./footerBage.tsx";
import FreshLogo from "$components/icons/fresh.tsx";
import GithubLogo from "$components/icons/github.tsx";
import VofSwordsLogo from "$components/icons/vofswords.tsx";
import Button from "$components/global/button.tsx";

const Layout = ({ children }: { children: ComponentChildren }) => {
  const vofSwordsHref = "https://vofswords.deno.dev/";
  const sourceHref = "https://github.com/VofSwords/deno-jobs";
  const freshHref = "https://fresh.deno.dev";
  return (
    <div>
      <header
        class={`
          fixed w-full bg-white
          h(header-mobile sm:header-desktop)
          top(auto sm:0) bottom(0 sm:auto)
          px(4 sm:10 lg:16 xl:16)
          z-20
        `}
      >
        <div
          class={`
            h-full
            mx(0 sm:-8)
            flex items-center
            justify-between
          `}
        >
          <div class={`px(0 sm:8)`}>
            <a class={`flex items-center`} href="/" target="_self">
              <IconBrandDeno class={`w-10 h-10`} />
              <span class={`text-2xl ml-2 mb-0.5 font-bold hidden sm:inline`}>Deno Jobs</span>
            </a>
          </div>
          <div class={`px(0 sm:8)`}>
            <Button href="/about" target="_self">
              <span class={`flex items-center text-blue-500`}>
                <IconPlus class={`w-4 h-4 mt-0.5`} />
                <span class={`text-l ml-1 inline`}>Add a vacancy</span>
              </span>
            </Button>
          </div>
        </div>
      </header>
      <div
        class={`
          min-h-screen min-h-tVH
          pt(0 sm:header-desktop)
          pb(header-mobile sm:0)
          flex items-stretch
        `}
      >
        <div class={`flex-grow bg-white relative z-10`}>
          {children}
        </div>
      </div>
      <div
        class={`
        relative h(40 sm:32 md:24 lg:16) w-full
      `}
      >
        <footer
          class={`
            w-inherit h-inherit
            fixed bottom(header-mobile sm:0)
            px(10 sm:16 lg:20)
            py(0 sm:4 lg:2)
            bg-gray-100
          `}
        >
          <div
            class={`
              h-full -mx-2
              flex flex-wrap
              flex(col sm:row)
              items(stretch sm:center)
              justify(center lg:end)
            `}
          >
            <FooterBage
              class={`px-2 py-1`}
              color="#fbbf24"
              icon={<VofSwordsLogo />}
              href={vofSwordsHref}
            >
              VofSwords
            </FooterBage>
            <FooterBage
              class={`px-2 py-1`}
              color="#0969da"
              icon={<GithubLogo />}
              href={sourceHref}
            >
              Source
            </FooterBage>
            <FooterBage
              class={`px-2 py-1`}
              color="#4ade80"
              icon={<FreshLogo />}
              href={freshHref}
            >
              It's <strong>Fresh</strong> here
            </FooterBage>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
