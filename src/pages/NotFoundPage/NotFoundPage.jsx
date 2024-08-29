import css from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div>
      return (
      <div className={css.notFoundContainer}>
        <h1 className={css.notFoundTitle}>404</h1>
        <p className={css.notFoundText}>
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <a href="/" className={css.notFounLink}>
          Go back to Homepage
        </a>
      </div>
      );
    </div>
  );
};
export default NotFoundPage;
