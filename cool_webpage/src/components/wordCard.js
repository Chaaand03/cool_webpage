import "./wordCard.css";

export default function WordCard({ word }) {
  const pronunciation =
    word.phonetic ||
    word.phonetics.find((p) => p.text)?.text ||
    "Not available";

  const definitions = word.meanings.flatMap((meaning) =>
    meaning.definitions.map((def) => ({
      partOfSpeech: meaning.partOfSpeech,
      definition: def.definition,
    }))
  );

  const synonyms = [
    ...new Set(
      word.meanings.flatMap((meaning) =>
        meaning.definitions.flatMap((def) => def.synonyms)
      )
    ),
  ];

  return (
    <div className="dictionary-card">
      <h2>{word.word}</h2>

      <p>
        <strong>Pronunciation:</strong> {pronunciation}
      </p>

      <h3>Definitions</h3>

      <ul>
        {definitions.map((item, index) => (
          <li key={index}>
            <strong>{item.partOfSpeech}</strong> — {item.definition}
          </li>
        ))}
      </ul>

      <h3>Synonyms</h3>

      <div className="synonyms">
        {synonyms.length ? (
          synonyms.map((synonym) => <span key={synonym}>{synonym}</span>)
        ) : (
          <p>No synonyms found.</p>
        )}
      </div>
    </div>
  );
}
