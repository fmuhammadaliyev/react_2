import style from "./header.module.css";

export default function Header() {
  return (
    <div>
      <header className={style.header}>
        <div className={style.container}>
          <div className={style.header__container}>
            <div className={style.header__containertop}>
              <div className={style.logo}>
                <a href="#" className={style.logolink}>
                  Shortly
                </a>
              </div>

              <nav className={style.nav}>
                <ul className={style.navlinks}>
                  <li>
                    <a href="#">Features</a>
                  </li>
                  <li>
                    <a href="#">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Resources</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className={style.registration}>
              <a href="#" className={style.login}>
                Login
              </a>
              <a href="#" className={style.sign}>
                Sign Up
              </a>
            </div>

            <button className={style.hamburger} aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
