import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import characters from './characters';
import styles from './styles.module.css';

function CharacterCard({ character }) {
  const imageUrl = useBaseUrl(character.image);
  const characterUrl = useBaseUrl(
    character.path.replace(/\.mdx?$/, '')
  );

  return (
    <a className={styles.card} href={characterUrl}>
      <img
        className={styles.image}
        src={imageUrl}
        alt={character.name}
      />

      <div className={styles.cardContent}>
        <h2>{character.name}</h2>
        <p className={styles.role}>{character.role}</p>
        <p>{character.summary}</p>
        <span className={styles.link}>View character →</span>
      </div>
    </a>
  );
}

export default function CharacterDirectory() {
  const [search, setSearch] = useState('');

  const filteredCharacters = characters.filter((character) => {
    const query = search.toLowerCase().trim();

    return [
      character.name,
      character.role,
      character.summary,
    ].some((field) => field.toLowerCase().includes(query));
  });

  return (
    <div className={styles.directory}>
      <input
        className={styles.search}
        type="search"
        placeholder="Search characters by name, role, or description..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        aria-label="Search characters"
      />

      <p className={styles.count}>
        Showing {filteredCharacters.length} of {characters.length} characters
      </p>

      <div className={styles.grid}>
        {filteredCharacters.map((character) => (
          <CharacterCard
            key={character.name}
            character={character}
          />
        ))}
      </div>

      {filteredCharacters.length === 0 && (
        <p>No characters found. Try something else?</p>
      )}
    </div>
  );
}