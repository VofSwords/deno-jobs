import { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
  class?: string;
  disabled?: boolean;
  href?: string;
  target?: string;
}

const Button = (
  { children, href, disabled, class: className, target }: Props,
) => {
  const button = (
    <button
      class={`
        px-3 py-1 
        rounded-lg
        hover:bg-gray-100
        disabled:(opacity-50 cursor-not-allowed)
        active:bg-gray-200
      `}
      disabled={disabled}
    >
      {children}
    </button>
  );

  if (href !== undefined) {
    return (
      <a href={href} target={target ?? "_self"} class={className}>
        {button}
      </a>
    );
  }

  return (
    <span class={className}>
      {button}
    </span>
  );
};

export default Button;
