import styles from './App.module.scss';
import Header from "./widgets/Header/ui/Header";

function App() {

  return (
    <div >
      <Header />
      <main className={styles.main}>
        <h1 >Тест для оценки риска развития сахарного диабета 2 типа <br /> (шкала FINDRISC)</h1>
        <img src="banner.jpg" alt="баннер" className={styles.image} />
      </main>
    </div >
  )
}

export default App
