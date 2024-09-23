import React, { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-tsx';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';

const CodeSnippet = ({ language, code }:{language:string, code:string}) => {
  const codeRef = useRef<HTMLElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Revert back after 2 seconds
    });
  };

  return (
    <div className="code-snippet">
      <pre>
        <code ref={codeRef} className={`language-${language}`}>
          {code}
        </code>
      </pre>
      <button 
        className={`copy-button ${isCopied ? 'copied' : ''}`} 
        onClick={copyToClipboard}
        disabled={isCopied} // Disable when copied to prevent multiple clicks
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
      <style jsx>{`
        .code-snippet {
          position: relative;
          margin: 1em 0;
          padding: 1em;
          background-color: #f5f5f5;
          border-radius: 4px;
          overflow: hidden;
        }
        pre {
          margin: 0;
          padding: 0;
          overflow-x: auto;
        }
        code {
          font-size: 14px;
          line-height: 1.5;
        }
        .copy-button {
          position: absolute;
          top: 5px;
          right: 5px;
          padding: 5px 10px;
          background-color: #000;
          color: white;
          border: none;
          border-radius: 3px;
          cursor: pointer;
          font-size: 12px;
          transition: background-color 0.3s, transform 0.1s ease-in-out;
        }
        .copy-button:active {
          transform: scale(0.95); /* Button shrink on click */
        }
        .copy-button:hover {
          background-color: #45a049;
        }
        .copy-button.copied {
          background-color: #4CAF50; /* Green background when copied */
          cursor: default; /* No pointer on hover after copy */
        }
        .copy-button.copied:hover {
          background-color: #4CAF50; /* Disable hover effect when copied */
        }
      `}</style>
    </div>
  );
};

export default CodeSnippet;
