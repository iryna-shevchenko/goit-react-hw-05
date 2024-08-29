import { Link } from "react-router-dom";
import css from "./GoBackBtn.module.css";
import { SlControlRewind } from "react-icons/sl";

const GoBackBtn = ({ path, children }) => {
  return (
    <Link to={path} className={css.linkBtn}>
      <SlControlRewind /> {children}
    </Link>
  );
};

export default GoBackBtn;
