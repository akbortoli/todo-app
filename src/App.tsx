import { PlusCircle } from "@phosphor-icons/react";

import { Header } from "./components/Header/Header";
import { Button } from "./components/Button/Button";

import styles from "./App.module.css";

function App() {
  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.addTaskContainer}>
          <input className={styles.addTaskInput} placeholder="Add a new task" />
          <Button type="button">
            Add
            <PlusCircle size={16} weight="bold" />
          </Button>
        </div>
      </section>
    </main>
  );
}

export default App;
