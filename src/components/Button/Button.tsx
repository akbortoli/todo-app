import styles from "./Button.module.css";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button className={styles.container} {...rest}>
      {children}
    </button>
  );
}
