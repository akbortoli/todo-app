import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.container}>
      <img src="/logo.svg" alt="logo" width="126" height="48" />
    </header>
  );
}
