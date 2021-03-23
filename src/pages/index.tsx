import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ig.News </title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Olá! Seja bem vindo! </span>
          <h1>
            Notícias sobre o mundo
            <span>React. </span>
          </h1>
          <p>
            Acesse todo o nosso conteúdo
            <br />
            <span>por apenas R$ 9,90/mês </span>
          </p>
          <SubscribeButton />
        </section>

        <img src="/images/avatar.svg" alt="Estudante" />
      </main>
    </>
  );
}
