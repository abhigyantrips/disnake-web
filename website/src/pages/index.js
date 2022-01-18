import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const FeatureList = [
  {
    title: 'Proper Rate-Limit Handling',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie augue a felis tincidunt venenatis eu eget erat.
      </>
    ),
  },
  {
    title: 'FastAPI-Like Syntax',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie augue a felis tincidunt venenatis eu eget erat.
      </>
    ),
  },
  {
    title: 'Type-Safety Measures',
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris molestie augue a felis tincidunt venenatis eu eget erat.
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className='hero__title'>Disnake</h1>
        <p className='hero__description'>A fork of discord.py - an async API wrapper for Discord written in Python.</p>
        <div className={styles.buttons}>
          <Link
            className="button button--outline button--lg"
            href="https://github.com/DisnakeDev/disnake">
            Visit GitHub
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      description="A fork of discord.py, an async API wrapper written in Python.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
