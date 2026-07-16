import React, { useEffect, useState } from "react";
import "./searchBar.css";
import WordCard from "./wordCard";
import useDebounce from "../hooks/useDebounce";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [word, setWord] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    if (!debouncedSearch.trim()) {
      setWord(null);
      setError("");
      return;
    }

    async function fetchWord() {
      try {
        setLoading(true);

        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${debouncedSearch}`
        );

        if (!response.ok) {
          throw new Error("Word not found");
        }

        const data = await response.json();

        setWord(data[0]);
        setError("");
      } catch (err) {
        setWord(null);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchWord();
  }, [debouncedSearch]);

  return (
    <div className="search-container">
      <h1>Dictionary Search</h1>
      <p className="search-description">
        This is a simple React application demonstrating the use of a debouncing
        technique with a free Dictionary API. Instead of making an API request
        on every keystroke, the application waits until the user pauses typing
        before fetching data. This reduces unnecessary network requests,
        improves performance, and provides a smoother user experience. Search
        for any English word to view its pronunciation, definitions, and
        synonyms.
      </p>

      <input
        type="text"
        placeholder="Search for a word here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {word && <WordCard word={word} />}
    </div>
  );
}
