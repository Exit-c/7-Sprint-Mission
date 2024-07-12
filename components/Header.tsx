import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "@/components/Header.module.css";
import logo from "@/public/logo.svg";
import logoMobile from "@/public/logo_mobile.svg";

const Header = () => {
  const activeStyle = {
    color: "#3692ff",
  };

  const router = useRouter();

  return (
    <header className={styles.header}>
      <div className={styles["nav-container"]}>
        <Link href="/">
          <button type="button" className={styles.logo} title="로고이미지버튼">
            <Image
              src={logo}
              alt="판다마켓로고"
              width="153"
              height="51"
              className={styles["logo-pt"]}
            />
            <Image
              src={logoMobile}
              alt="판다마켓로고"
              width="81"
              height="27"
              className={styles["logo-m"]}
            />
          </button>
        </Link>
        <nav>
          <ul>
            <li>
              <Link
                href="/Board"
                className={styles.link}
                style={router.pathname === "/board" ? activeStyle : undefined}
              >
                자유게시판
              </Link>
            </li>
            <li>
              <Link
                href="/items"
                className={styles.link}
                style={
                  router.pathname === "/items" || router.pathname === "/additem"
                    ? activeStyle
                    : undefined
                }
              >
                중고마켓
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Link href="/login">
          <button type="button" className={styles["login-btn"]}>
            로그인
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
