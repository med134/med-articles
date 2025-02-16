"use client";
import React, { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { FiCopy, FiCheck } from "react-icons/fi"; // Importing copy and check icon

export const  CodeBlock = ({
  code,
  language,
}: {
  code: string;
  language: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="relative">
      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 text-white bg-gray-800 p-1 rounded hover:bg-gray-700"
      >
        {copied ? <FiCheck className="text-green-400" /> : <FiCopy />}
      </button>

      {/* Syntax Highlighter */}
      <SyntaxHighlighter
        language={language}
        style={dracula}
        className="rounded-lg p-4"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
