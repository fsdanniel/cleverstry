import { Link } from "react-router-dom";
import React from "react";
import Editor from "@react-page/editor";
import plugins from "./Plugins";
import "@react-page/editor/lib/index.css";

export default function Edit(){
    return(
<Editor cellPlugins={plugins} />
    )}