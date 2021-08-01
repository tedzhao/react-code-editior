import React from 'react';

const defaultCodeText = `
    const RootCompoent = () => (
        <div>
            It works with React
        </div>
    )
`;

const CodeEditor = ({ version, onCodeRun }) => {
    const [code, setCode] = React.useState(defaultCodeText);

    const runReact = () => {
        fetch('./react', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                code,
                version,
            })
        }).then(res => {
            res.text().then(html => {
                onCodeRun(html);
            })
        })
    }

    return (
      <div className="left-side">
        <div>
          <span>Write your React Code</span>
          <a className="runReact-button" onClick={runReact}>Run</a>
        </div>
        <textarea
          id="react-code"
          placeholder="Write your react code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </div>
    );

}

export default CodeEditor;