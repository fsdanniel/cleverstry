import React, { useState } from "react";
import Editor, { Value } from "@react-page/editor";
import "@react-page/editor/lib/index.css";
import slate from "@react-page/plugins-slate";
import image from "@react-page/plugins-image";
import { HTMLRenderer } from "ory-editor-renderer";
import ReactDOMServer from "react-dom/server";

const cellPlugins = [slate(), image];

const Page = (props) => {
  const [value, setValue] = useState(null);
  // console.log('value',value);
  // const html  = ReactDOMServer.renderToString(<HTMLRenderer state={value} plugins={cellPlugins} />);
  // console.log('html',html);
  const doneHandler = () => {
    console.log("value", value, cellPlugins);
    const html = ReactDOMServer.renderToString(
      <HTMLRenderer state={value} plugins={cellPlugins} />
    );
    console.log("html", html);
  };
  return (
    <>
      {/* <HTMLRenderer state={value} plugins={cellPlugins} /> */}
      <Editor cellPlugins={cellPlugins} value={value} onChange={setValue} />
      <button onClick={doneHandler}>Done</button>
    </>
  );
};

export default Page;
