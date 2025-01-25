import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_style.css";
import "froala-editor/css/froala_editor.css";
import "froala-editor/css/plugins.pkgd.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import { FroalaOptions } from "froala-editor";

export const froalaOptions: Partial<FroalaOptions> = {
  heightMin: 175,
  placeholderText: "Compose a support ticket...",
  charCounterCount: false,
  wordCounterCount: false,
  quickInsertEnabled: false,
  toolbarButtons: [
    ["fontSize", "bold", "italic", "underline", "strikeThrough"],
    [
      "alignLeft",
      "alignCenter",
      "alignRight",
      "alignJustify",
      "textColor",
      "backgroundColor",
      "codeBlocks",
    ],
    [
      "formatOLSimple",
      "codeBlock",
      "formatUL",
      "insertLink",
      "insertImage",
      "insertFile",
    ],
  ],
  imageEditButtons: [
    "imageAlign",
    "imageCaption",
    "imageRemove",
    "|",
    "imageLink",
    "linkOpen",
    "linkEdit",
    "linkRemove",
  ],
};
