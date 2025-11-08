
import React, { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
}

const CopyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
);

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative my-4 rounded-lg bg-slate-800 dark:bg-black">
      <div className="flex justify-between items-center px-4 py-2 bg-slate-700 dark:bg-slate-900 rounded-t-lg">
        <span className="text-xs font-semibold text-slate-300 uppercase">{language}</span>
        <button onClick={handleCopy} className="flex items-center space-x-1 text-sm text-slate-300 hover:text-white">
          {copied ? <CheckIcon /> : <CopyIcon />}
          <span>{copied ? 'Đã chép' : 'Chép'}</span>
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm">
        <code className="font-mono text-white">{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
