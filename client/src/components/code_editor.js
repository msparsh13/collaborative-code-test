import React, { useRef, useEffect } from 'react'

import { EditorState } from '@codemirror/basic-setup'
import { basicSetup , EditorView } from 'codemirror'



export default function Code_Editor() {
  const editor = useRef()

  useEffect(() => {
  
    let myTheme = EditorView.theme({
      "&": {
        color: "white",
        backgroundColor: "#034" // Dark blue background
      },
      ".cm-content": {
        caretColor: "#0e9" // Bright cyan caret
      },
      "&.cm-focused .cm-cursor": {
        borderLeftColor: "#0e9" // Bright cyan cursor
      },
      "&.cm-focused .cm-selectionBackground, ::selection": {
        backgroundColor: "#074" // Dark green selection background
      },
      ".cm-gutters": {
        backgroundColor: "#045", // Slightly lighter dark blue for gutters
        color: "#ddd", // Light gray text for line numbers
        border: "none"
      }
    }, { dark: true });

    const view  = new EditorView({
        extensions: [basicSetup ,  myTheme],
        parent: document.body ,
        
      })


    return () => {
      view.destroy()
    }
  }, [editor])

  return <div   ref={editor}></div>
}