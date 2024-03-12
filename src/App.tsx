import { PlusCircle } from "@phosphor-icons/react";

import { Header } from "./components/Header/Header";
import { Button } from "./components/Button/Button";

import styles from "./App.module.css";

function App() {
  return (
    <main>
      <Header />

      <section className={styles.content}>
        <div className={styles.addTodoContainer}>
          <input className={styles.addTodoInput} placeholder="Adicione uma nova tarefa" />
          <Button type="button">
            Criar
            <PlusCircle size={16} weight="bold" />
          </Button>
        </div>
      </section>
    </main>
  );
}

export default App;
