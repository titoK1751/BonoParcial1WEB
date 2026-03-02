'use client';

import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const slides = [
  {
    body: 'Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.',
    author: 'Albert Schweitzer',
  },
  {
    body: 'Hazlo funcionar, hazlo bien, hazlo rápido.',
    author: 'Kent Beck',
  },
  {
    body: 'Primero resuelve el problema. Luego escribe el código.',
    author: 'John Johnson',
  },
  {
    body: 'La práctica no hace la perfección. La práctica consciente sí.',
    author: 'Anders Ericsson',
  },
];

function TextSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4 rounded-md border p-4">
      <p className="text-base">“{slides[currentIndex].body}”</p>
      <p className="text-sm text-gray-500">— {slides[currentIndex].author}</p>

      <div className="flex gap-2">
        <Button
          variant="outline-secondary"
          onClick={handlePrevious}
          className="h-10 w-10 rounded-full p-0"
        >
          {'<'}
        </Button>
        <Button
          variant="outline-secondary"
          onClick={handleNext}
          className="h-10 w-10 rounded-full p-0"
        >
          {'>'}
        </Button>
      </div>
    </div>
  );
}

export default TextSlider;
