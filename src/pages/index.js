import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Abrigar"
      description="An encyclopedia of the world of Abrigar"
    >
      <main
        style={{
          padding: '4rem 2rem',
          textAlign: 'center',
        }}
      >
        <h1>Welcome to Abrigar</h1>

        <p>
          A world of oceans, islands, nations, pirates,
          and the people who have somehow decided living here is a good idea.
        </p>

        <p>
          Explore the nations, factions, people, places, and history
          that make up the world of Abrigar.
        </p>

        <a
          href="/abrigar/docs/abrigar"
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.75rem 1.5rem',
            borderRadius: '8px',
            backgroundColor: 'var(--ifm-color-primary)',
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Explore Abrigar
        </a>
      </main>
    </Layout>
  );
}