import Link from "next/link";
import { ButtonTypes } from "../enum/types";

interface Props {
  type: ButtonTypes;
  href?: string;
  title: string;
}

const ButtonCustom = ({ type, href, title }: Props) => {
  if (type === ButtonTypes.BUTTON) return <button>Button</button>;

  return (
    href && (
      <Link className="underline" href={href} target="_blank">
        {title}
      </Link>
    )
  );
};

export default ButtonCustom;
