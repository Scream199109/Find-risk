import styles from './TestTypeBlock.module.scss';

const defaultText = 'Тест для оценки риска развития сахарного диабета 2 типа';
const defaultScale = '(шкала FINDRISC)';

const TestTypeBlock = (props) => {
  const {text = defaultText, scale = defaultScale} = props;
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.text}>{text} < br /> {scale}</h1>
      <img className={styles.image} src="banner.jpg" alt="баннер" />
    </section>
  );
};

export default TestTypeBlock;
