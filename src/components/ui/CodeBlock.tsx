import React, { useState } from 'react';

const CodeSnippet = ({
  language,
  code,
}: {
  language: string;
  code: string;
}) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="relative my-4 rounded-md bg-gray-100 dark:bg-zinc-900 p-4 font-mono text-sm text-gray-800 dark:text-gray-100">
      <pre className="overflow-x-auto whitespace-pre-wrap break-words">
        <code>{code}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        disabled={isCopied}
        className={`absolute top-2 right-2 rounded px-2 py-1 text-xs font-medium transition 
          ${isCopied
            ? 'bg-green-600 text-white cursor-default'
            : 'bg-black text-white hover:bg-green-700 active:scale-95'}
        `}
      >
        {isCopied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default CodeSnippet;
