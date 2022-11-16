import IconExternalLink from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/external-link.tsx";
import IconCheck from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/check.tsx";
import IconChecks from "https://deno.land/x/tabler_icons_tsx@0.0.1/tsx/checks.tsx";

interface Props {
  title: string,
  externalUrl: string,
  company: {
    name: string,
    verified: boolean,
    trusted: boolean,
    _id: string
  }
}

const ListItem = (props: Props) => {

  return (
    <div class={`
      h-full w-full
      rounded-2xl px-6 py-2
      bg-gray(50 hover:100)
      transition-colors duration-75
    `}>
      <div class={`flex justify-start items-center`}>
        <a 
          class={`
            pb-1
            text-2xl
            hover:text-blue-600
            cursor-pointer
            transition-colors duration-150
            flex justify-start items-center
          `}
          href={ props.externalUrl }
          target="_blank"
        >
          <span class={`pr-1`}>
            { props.title }
          </span>
          <IconExternalLink class={`w-4 h-4`} />
        </a>
      </div>
      <div>
        <span class={`text-gray-500 flex justify-start items-center`}>
          { props.company.name }
          { props.company.verified ? (
              props.company.trusted ? <IconChecks class={`w-4 h-4`} /> : <IconCheck class={`w-4 h-4`} />
            ) : undefined
          }
        </span>
      </div>
    </div>
  )
}

export default ListItem;
