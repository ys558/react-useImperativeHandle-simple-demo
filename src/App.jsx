import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'

const TextInput = forwardRef((props, forwaredRef) => {
  const inputRef = useRef();
  useImperativeHandle(forwaredRef, () => ({
    focus: () => inputRef.current.focus(),
    getVal: () => inputRef.current.value
  }))
  return <input type="text" ref={inputRef} />
})

function App() {
  const textInputRef = useRef();
  const handleFocus = () => {
    textInputRef.current.focus();
  }
  const getInputVal = () => console.log('=====>', textInputRef.current.getVal());

  return (
    <div className="App">
      <TextInput ref={textInputRef} />
      <button onClick={handleFocus}>点击聚焦</button>
      <button onClick={getInputVal}>查看控制台，获取input框的值</button>
    </div>
  )
}

export default App
