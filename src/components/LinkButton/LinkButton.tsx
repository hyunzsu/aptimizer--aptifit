import Link from "next/link";
import s from "./LinkButton.module.css";

type Link = {
  href: string;
  label: string;
};

const LinkButton = ({ href, label }: Link) => {
  return (
    <Link className={s.LinkButton} href={href}>
      {label}
    </Link>
  );
};

export default LinkButton;
