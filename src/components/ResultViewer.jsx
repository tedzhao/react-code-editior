import React from "react";

const ResultViewer = ({ content }) => {
  return (
    <div className="right-side">
      <div>
        <span>Result</span>
      </div>
      <iframe
        id="react-iframe"
        contentEditable={false}
        src={"data:text/html," + encodeURIComponent(content)}
      />
    </div>
  );
};

export default ResultViewer;
