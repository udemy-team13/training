import { useEffect, useState } from "react"

export default function Text() {
  let [text, setText] = useState('');
  let [textLength, setTextLength] = useState(0)

  useEffect(() => {
    setTextLength(text.length);
  }, [text]);

  return (
    <div>
      <textarea name="" id="" cols="30" rows="10" onChange={(e) => {
        setText(e.target.value)
      }}></textarea>
      <h3>글자수: {textLength}</h3>
    </div>
  )
}