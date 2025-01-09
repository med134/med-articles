"use client";
import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { IoCopyOutline } from "react-icons/io5";
import { MdFileDownloadDone } from "react-icons/md";

type HTMLString = string;
interface CodeEditorProps {
  codeSource: HTMLString;
}
const CodeEditor: React.FC<CodeEditorProps> = ({ codeSource }) => {
  const [showCode, setShowCode] = useState(false);
  const [showOutput, setShowOutput] = useState(true);
  const [codeIsCopy, setIsCopy] = useState(false);

  const toggleOutputVisibility = () => {
    setShowOutput(!showOutput);
    setShowCode(!showCode);
  };

  /*   const handleScreenSizeChange = (size: string) => {
    setSelectedScreenSize(size);
    // Update code based on selected screen size
    let updatedCode = codeSource; // Default to the original code
    switch (size) {
      case "sm":
        updatedCode = updatedCode
          .replace(/\bgrid\b/g, "block")
          .replace(/\btext-5xl\b/g, "text-xl");
        break;
      case "md":
        updatedCode = updatedCode
          .replace(/\bgrid\b/g, "block")
          .replace(/\btext-4xl\b/g, "text-2xl");
        break;
      default:
        break;
    }
    setCode(updatedCode);
  }; */

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(codeSource)
      .then(() => {
        setIsCopy(true);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="border border-3 rounded-md w-full h-full">
      <div className="px-2 flex justify-between items-stretch py-4 md:py-2 bg-mainColor font-semibold rounded-tr-lg rounded-tl-lg md:items-center">
        <span className="text-light px-4 py-1 xs:hidden">Code source</span>
        <div className="flex justify-center items-center">
          <button
            onClick={copyToClipboard}
            className="flex justify-center border border-light px-2 py-1 mr-3 items-center text-light bg-mainColor rounded-lg hover:bg-cyan-600 hover:text-light"
          >
            <span className="md:hidden">{codeIsCopy ? "copied" : "copy"}</span>
            {codeIsCopy ? (
              <MdFileDownloadDone className="ml-1" />
            ) : (
              <IoCopyOutline className="ml-1" />
            )}
          </button>
          <button
            className=" text-light mr-2 bg-mainColor border border-light px-2 py-1 rounded-lg hover:bg-cyan-600 hover:text-light"
            onClick={toggleOutputVisibility}
          >
            {showOutput ? "Show code" : "Preview"}
          </button>
        </div>
      </div>
      <div className="block">
        {showCode && (
          <Editor
            height="500px"
            width="100%"
            value={codeSource}
            language="javascript"
            theme="vs-dark"
          />
        )}
        {showOutput && (
          <div className="p-4 sm:w-[450px]">
            <div
              className={`border border-gray-500 p-4`}
              dangerouslySetInnerHTML={{ __html: codeSource }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeEditor;
