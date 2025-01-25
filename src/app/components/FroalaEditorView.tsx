"use client";
import React from "react";
import FroalaEditorView from "react-froala-wysiwyg/FroalaEditorView";

const FroalaEditorComponent = ({ content }: { content: string }) => {
  return (
    <div>
      <FroalaEditorView model={content} />
    </div>
  );
};

export default FroalaEditorComponent;
