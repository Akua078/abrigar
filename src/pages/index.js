import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Abrigar"
      description="An encyclopedia of the world of Abrigar"
    >
      <main
      className="abrigar-home"
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

      </main>
    </Layout>
  );
}