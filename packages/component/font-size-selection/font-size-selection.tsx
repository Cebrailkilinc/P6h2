import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '../../../core/ui/components/button';

interface FontSizeSelectorProps {
  handleCommand: (size: string) => void;
  initialFontSize: number;
}

const FontSizeSelector: React.FC<FontSizeSelectorProps> = ({ handleCommand, initialFontSize }) => {
  const [fontSize, setFontSize] = useState(initialFontSize);

  useEffect(() => {
    handleCommand(`${fontSize}px`);
  }, [fontSize]);

  const increaseFontSize = () => {
    setFontSize(prevSize => prevSize + 1);
  };

  const decreaseFontSize = () => {
    setFontSize(prevSize => Math.max(prevSize - 1, 1));
  };

  return (
    <div className="flex items-center gap-2 rounded-[4px] border border-primaryGray pl-2 pr-2">
      <h1 className="w-8 text-[12px]">{fontSize} pt</h1>
      <div className="flex flex-col items-center">
        <Button size="xxs" onClick={increaseFontSize} variant="secondary">
          <ChevronUp color="#4B465C" size={12} />
        </Button>
        <Button size="xxs" onClick={decreaseFontSize} variant="secondary">
          <ChevronDown color="#4B465C" size={12} />
        </Button>
      </div>
    </div>
  );
};

export default FontSizeSelector;
