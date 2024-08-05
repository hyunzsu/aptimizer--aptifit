import Link from "next/link";
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.Header}>
      <div className={s.container}>
        <h1 className={s.logo}>
          <Link href="/">APTIFIT</Link>
        </h1>
        {/* <nav>
          <ul className={s.ul}>
            <li>
              <Link className={s.login} href="/login">
                로그인
              </Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
