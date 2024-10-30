import React, { useRef, useEffect } from 'react'

import { EditorState } from '@codemirror/basic-setup'
import { basicSetup , EditorView } from 'codemirror'



export default function Code_Editor() {
  const editor = useRef()

  useEffect(() => {
  

    const view  = new EditorView({
        extensions: [basicSetup],
        parent: document.body
      })


    return () => {
      view.destroy()
    }
  }, [editor])

  return <div  className="bg-black" ref={editor}></div>
}