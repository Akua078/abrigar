import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Abrigar"
      description="An encyclopedia of the world of Abrigar"
    >
      <main>
        {/* Hero */}
        <header>
          <div>
            <p>THE WORLD OF</p>

            <h1>ABRIGAR</h1>

            <p>
              Oceans. Islands. Nations. Pirates.
              <br />
              And everything that lives between them.
            </p>

            <Link to="/docs/abrigar">
              Enter Abrigar
            </Link>
          </div>
        </header>

        {/* Introduction */}
        <section>
          <div>
            <p>THE ARCHIVES</p>

            <h2>Explore the World</h2>

            <p>
              Abrigar is a world of scattered islands, vast oceans,
              competing nations, strange powers, and people trying to
              survive it all.
            </p>
          </div>

          {/* Navigation cards */}
          <div>
            <Link to="/docs/world">
              <h3>The World</h3>
              <p>
                Oceans, islands, geography, and the places that make up
                Abrigar.
              </p>
            </Link>

            <Link to="/docs/nations">
              <h3>Nations</h3>
              <p>
                Kingdoms, governments, territories, and powers competing
                for control.
              </p>
            </Link>

            <Link to="/docs/groups">
              <h3>Groups</h3>
              <p>
                Factions, organizations, pirates, and other groups
                operating throughout the world.
              </p>
            </Link>

            <Link to="/docs/abrigar">
              <h3>History</h3>
              <p>
                The events, conflicts, and stories that shaped Abrigar.
              </p>
            </Link>
          </div>
        </section>

        {/* Featured quote */}
        <section>
          <blockquote>
            <p>
              “Nothing is beyond our reach.”
            </p>

            <cite>
              — The Azure Cooperation
            </cite>
          </blockquote>
        </section>
      </main>
    </Layout>
  );
}