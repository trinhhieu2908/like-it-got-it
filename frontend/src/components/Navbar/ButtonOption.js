
import styles from './ButtonOption.module.css'

const ButtonOption = (props) => {
  return (
    <div className={styles["navbar-btn"]}>
      <a className={`nav-link ${styles["nav-option-btn"]}`} href="/">
        <i className="fas fa-search"></i>
      </a>
      <a className={`nav-link ${styles["nav-option-btn"]}`} href="/">
        <i className="fas fa-shopping-cart"></i>
      </a>
      <a className={`nav-link ${styles["nav-option-btn"]}`} href="/">
        <i className="fas fa-user"></i>
      </a>
      <button
        className={`navbar-toggler`}
        onClick={props.onOpenSidebar}
        type="button"
      >
        <i className="fas fa-bars text-white"></i>
      </button>
    </div>
  );
};

export default ButtonOption;
