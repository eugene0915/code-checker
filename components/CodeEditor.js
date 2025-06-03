// components/CodeEditor.js
import { useEffect, useRef } from 'react';
import ace from 'ace-builds';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';

export default function CodeEditor() {
  const editorRef = useRef(null);

  useEffect(() => {
    const editor = ace.edit(editorRef.current);
    editor.setTheme('ace/theme/monokai');
    editor.session.setMode('ace/mode/javascript');
    editor.setOptions({
      fontSize: '14px',
      tabSize: 2,
      showPrintMargin: false,
      wrap: true,
    });
    editor.focus();
  }, []);

  return (
    <div
      ref={editorRef}
      className="rounded-lg shadow-lg"
      style={{
        width: '100%',
        height: '500px'
      }}
    />
  );
}
