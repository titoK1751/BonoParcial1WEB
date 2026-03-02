'use client';

import { useMemo, useState } from 'react';
import Form from 'react-bootstrap/Form';

type TextStats = {
  words: number;
  characters: number;
  sentences: number;
  paragraphs: number;
  averageReadingTimeMinutes: number;
  longestWord: string;
};

function calculateStats(text: string): TextStats {
  const words = text.trim().length === 0 ? [] : text.trim().split(/\s+/);

  const sentenceParts = text
    .split(/[.!?]+/)
    .map((part) => part.trim())
    .filter((part) => part.length > 0);

  const paragraphParts = text
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter((part) => part.length > 0);

  const normalizedWords = text.match(/[A-Za-zÁÉÍÓÚáéíóúÑñÜü0-9]+/g) ?? [];

  const longestWord = normalizedWords.reduce((currentLongest, currentWord) => {
    if (currentWord.length > currentLongest.length) {
      return currentWord;
    }

    return currentLongest;
  }, '');

  return {
    words: words.length,
    characters: text.length,
    sentences: sentenceParts.length,
    paragraphs: paragraphParts.length,
    averageReadingTimeMinutes: words.length / 220,
    longestWord,
  };
}

function TextAnalyzer() {
  const [text, setText] = useState('');

  const stats = useMemo(() => calculateStats(text), [text]);

  return (
    <div className="space-y-4 rounded-md border p-4">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <div className="rounded-md border p-3 text-sm">
          <p className="font-semibold">Words</p>
          <p>{stats.words}</p>
        </div>
        <div className="rounded-md border p-3 text-sm">
          <p className="font-semibold">Characters</p>
          <p>{stats.characters}</p>
        </div>
        <div className="rounded-md border p-3 text-sm">
          <p className="font-semibold">Sentences</p>
          <p>{stats.sentences}</p>
        </div>
        <div className="rounded-md border p-3 text-sm">
          <p className="font-semibold">Paragraphs</p>
          <p>{stats.paragraphs}</p>
        </div>
      </div>

      <Form.Control
        as="textarea"
        rows={8}
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Escribe tu texto aquí..."
      />

      <div className="flex flex-col gap-2 rounded-md border p-3 text-sm md:flex-row md:items-center md:justify-between">
        <p>Average Reading Time: {stats.averageReadingTimeMinutes.toFixed(2)} minutes</p>
        <p>Longest word: {stats.longestWord || '-'}</p>
      </div>
    </div>
  );
}

export default TextAnalyzer;
