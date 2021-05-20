import React from "react";
import ReactDOM from "react-dom";
import Editor from "@monaco-editor/react";

const mount = document.createElement("div");
document.body.appendChild(mount);

ReactDOM.render(<Editor value="test" />, mount);
