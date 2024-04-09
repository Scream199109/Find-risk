import styles from './AnswerBlock.module.scss';

const AnswerBlock = (props) => {
  const {src, alt, children} = props;
  return (
    <section className={styles.wrapper}>
      {children}
      <img className={styles.image} src={src} alt={alt} />
    </section>
  );
};

export default AnswerBlock;
