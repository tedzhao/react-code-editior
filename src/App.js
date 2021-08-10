import React from "react";
import "./App.css";
import CodeEditor from "./components/CodeEditor";
import ResultViewer from "./components/ResultViewer";
import VersionOption from "./components/VersionOption";

const App = () => {
  const [version, setVersion] = React.useState("16.14.0");
  const [content, setContent] = React.useState("");

  return (
    <>
      <h2>React online editor</h2>
      <div>
        <span>React version: </span>
        <VersionOption
          defaultValue={version}
          onSelectedChange={(e) => setVersion(e.target.value)}
        />
      </div>
      <div className="container">
        <CodeEditor
          version={version}
          onCodeRun={(result) => setContent(result)}
        />
        <ResultViewer content={content} />
      </div>
      <br />
      <div className="footer">Copyright @ 2021 Ted</div>
    </>
  );
};

export default App;
