import clsx from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
// import ReactDOM from "react-dom";

const Navigation = () => {
  return (
    <div>
      <header className={css.header}>
        <div className={css.box}>
          <nav>
            <ul className={css.nav}>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    clsx(css.link, isActive && css.active)
                  }
                  to="/"
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    clsx(css.link, isActive && css.active)
                  }
                  to="/movies"
                >
                  MOVIES
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Navigation;
