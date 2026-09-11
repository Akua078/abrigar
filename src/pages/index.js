import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Abrigar"
      description="An encyclopedia of the world of Abrigar"
    >
      <main>
        <section className="hero">
          <h1>Abrigar</h1>

          <p>
            A world of oceans, islands, nations, pirates,
            and the people who have somehow decided living here is a good idea.
          </p>

          <a href="/abrigar/docs/abrigar">
            Enter Abrigar
          </a>
        </section>
      </main>
    </Layout>
  );
}