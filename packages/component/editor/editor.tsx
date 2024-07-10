import React, { useRef, useState, useEffect } from 'react';
import { Button } from '@/core/ui/components/button';
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Bold,
  Italic,
  List,
  ListOrdered,
  Redo2,
  Underline,
  Undo2,
  Image,
} from 'lucide-react';
import { EditorProps } from './editor.type';
import * as cva from './editor.cva';
import { useClassnames } from '@/packages/hook/use-classnames';
import FontSizeSelector from '../font-size-selection';
import '@/packages/asset/style/editor.css';

const Editor: React.FC<EditorProps> = ({ data, config, onChange }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const [activeStyles, setActiveStyles] = useState<string[]>([]);
  const [fontSize, setFontSize] = useState(14);

  const cx = useClassnames({
    root: cva.rootCva(),
  });

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = data;
    }
    setTimeout(() => updateActiveStyles(), 100);
  }, []);

  const applyStyle = (style: string) => {
    document.execCommand(style);
    updateActiveStyles();
  };

  const toggleStyle = (style: string) => {
    document.execCommand(style);
    updateActiveStyles();
  };

  const handleButtonClick = (style: string) => {
    toggleStyle(style);
  };

  const handleInput = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const getButtonClass = (style: string) => {
    return activeStyles.includes(style) ? 'bg-secondaryGray' : '';
  };

  const handleCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    updateActiveStyles();
  };

  const handleFontSizeChange = (size: string) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);

      // Create a document fragment to hold the new nodes
      const fragment = document.createDocumentFragment();

      // Extract the contents of the selection
      const selectedContent = range.extractContents();

      // Function to unwrap spans
      const unwrapSpans = (node: Node) => {
        if (
          node.nodeType === Node.ELEMENT_NODE &&
          (node as HTMLElement).tagName === 'SPAN'
        ) {
          while (node.firstChild) {
            fragment.appendChild(node.firstChild);
          }
          (node as ChildNode).remove();
        } else {
          fragment.appendChild(node);
        }
      };

      selectedContent.childNodes.forEach(unwrapSpans);

      // Wrap the entire fragment in a single span with the new font size
      const span = document.createElement('span');
      span.style.fontSize = size;
      span.appendChild(fragment);

      // Clear the existing range content and insert the new span
      range.deleteContents();
      range.insertNode(span);

      // Adjust the range to select the new content
      const newRange = document.createRange();
      if (span.firstChild && span.lastChild) {
        newRange.setStartBefore(span.firstChild);
        newRange.setEndAfter(span.lastChild);
        selection.removeAllRanges();
        selection.addRange(newRange);
      }

      updateActiveStyles();
      if (editorRef.current) {
        onChange(editorRef.current.innerHTML);
      }
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = document.createElement('img');
        img.src = e.target?.result as string;
        img.style.maxWidth = '100%';
        if (editorRef.current) {
          editorRef.current.appendChild(img);
          onChange(editorRef.current.innerHTML);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const updateActiveStyles = () => {
    const selection = window.getSelection();
    if (selection) {
      const newActiveStyles = ['bold', 'italic', 'underline'].filter((style) => {
        return document.queryCommandState(style);
      });
      setActiveStyles(newActiveStyles);
    }
  };

  return (
    <div className="p-4">
      <div className="rounded border border-primaryGray">
        <div className="flex flex-wrap gap-2 rounded border-b border-primaryGray p-3">
          {config.bold && (
            <Button
              onClick={() => handleButtonClick('bold')}
              variant="primary"
              className={getButtonClass('bold')}
            >
              <Bold color="#4B465C" size={16} />
            </Button>
          )}
          {config.italic && (
            <Button
              onClick={() => handleButtonClick('italic')}
              variant="primary"
              className={getButtonClass('italic')}
            >
              <Italic color="#4B465C" size={16} />
            </Button>
          )}
          {config.underline && (
            <Button
              onClick={() => handleButtonClick('underline')}
              variant="primary"
              className={getButtonClass('underline')}
            >
              <Underline color="#4B465C" size={16} />
            </Button>
          )}
          {config.align && (
            <>
              <Button variant="primary" onClick={() => handleCommand('justifyLeft')}>
                <AlignLeft color="#4B465C" size={16} />
              </Button>
              <Button variant="primary" onClick={() => handleCommand('justifyFull')}>
                <AlignJustify color="#4B465C" size={16} />
              </Button>
              <Button variant="primary" onClick={() => handleCommand('justifyCenter')}>
                <AlignCenter color="#4B465C" size={16} />
              </Button>
              <Button variant="primary" onClick={() => handleCommand('justifyRight')}>
                <AlignRight color="#4B465C" size={16} />
              </Button>
            </>
          )}
          {config.list && (
            <>
              <Button
                variant="primary"
                onClick={() => handleCommand('insertUnorderedList')}
              >
                <List color="#4B465C" size={16} />
              </Button>
              <Button
                variant="primary"
                onClick={() => handleCommand('insertOrderedList')}
              >
                <ListOrdered color="#4B465C" size={16} />
              </Button>
            </>
          )}
          {config.fontSize && (
            <FontSizeSelector
              handleCommand={handleFontSizeChange}
              initialFontSize={fontSize}
            />
          )}
          {config.undoRedo && (
            <>
              <Button variant="primary" onClick={() => handleCommand('undo')}>
                <Undo2 color="#4B465C" size={16} />
              </Button>
              <Button variant="primary" onClick={() => handleCommand('redo')}>
                <Redo2 color="#4B465C" size={16} />
              </Button>
            </>
          )}
          {config.image && (
            <>
              <input
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                id="image-upload"
                onChange={handleImageUpload}
              />
              <Button
                variant="primary"
                onClick={() => document.getElementById('image-upload')?.click()}
              >
                <Image color="#4B465C" size={16} />
              </Button>
            </>
          )}
        </div>
        <div
          ref={editorRef}
          contentEditable
          className="editable-content min-h-[200px] rounded-md p-2 outline-none"
          onInput={handleInput}
          onMouseUp={updateActiveStyles}
          onKeyUp={updateActiveStyles}
        ></div>
      </div>
    </div>
  );
};

export default Editor;
