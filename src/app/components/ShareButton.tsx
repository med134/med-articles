"use client";
import React, { useState } from "react";

import { FacebookShareButton, LinkedinShareButton } from "react-share";

import {
  FaFacebookSquare,
  FaLinkedin,
  FaClipboardCheck,
  FaRegClipboard,
} from "react-icons/fa";

const ShareButton = ({ text, url }: { text: string; url: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <div>
      <section className="my-2">
        <div className="flex flex-col items-center justify-center bg-gray-100 py-2 ">
          <h1 className="text-2xl font-bold mb-4">Share this content</h1>
          <div className="flex space-x-4 py-3">
            <FacebookShareButton url={url}>
              <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition">
                <FaFacebookSquare size={24} />
              </button>
            </FacebookShareButton>
            <LinkedinShareButton url={url} summary={text}>
              <button className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition">
                <FaLinkedin size={24} />
              </button>
            </LinkedinShareButton>
          </div>
        </div>

        {/* Copy URL Section */}
        <div className="flex flex-col items-center justify-center bg-gray-100 mb-2 py-2">
          <h1 className="text-xl font-bold mb-4">Copy this URL</h1>
          <div className="flex items-center justify-center">
            <button
              onClick={handleCopy}
              className={`flex items-center justify-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200 ${
                copied ? "bg-green-600 hover:bg-green-700" : ""
              }`}
            >
              {copied ? (
                <FaClipboardCheck size={24} />
              ) : (
                <FaRegClipboard size={16} />
              )}
              <span className="ml-2">{copied ? "Copied!" : "Copy URL"}</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShareButton;
