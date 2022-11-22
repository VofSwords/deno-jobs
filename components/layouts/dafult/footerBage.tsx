import { ComponentChildren, VNode } from "preact";

interface FooterBageProps {
  children: ComponentChildren;
  class: string;
  color: string;
  href: string;
  icon?: VNode;
}

const FooterBage = (
  { children, class: className, icon, color, href }: FooterBageProps,
) => {
  const iconElement = icon === undefined
    ? (
      null
    )
    : (
      <div class={`h-6 max-h-6 w-6 max-w-[1.5rem] pt-0.5 mr-1.5`}>
        {icon}
      </div>
    );
  return (
    <div class={className}>
      <a href={href}>
        <div
          class={`
            h-8 w-full
            min-w-[10rem] max-w-[16rem]
            mx-auto
            px-3 rounded-full
            flex items-center justify-center
            cursor-pointer
            opacity(60 hover:100)
            bg(transparent hover:[${color}60] active:[${color}C0])
            transition
          `}
        >
          {iconElement}
          <div class={`text-base font-normal text-gray-900`}>
            {children}
          </div>
        </div>
      </a>
    </div>
  );
};

export default FooterBage;
