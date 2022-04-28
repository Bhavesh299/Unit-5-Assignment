import { useState } from 'react'
export const TodoInput = ({ getData }) => {
  const [text, setText] = useState('')
  return (
    <div>
      <input
        className="Inputbox"
        onChange={(e) => {
          setText(e.target.value)
        }}
        type="text"
        placeholder="Enter Todo"
      />
      <button className="Inputbutton"
        onClick={() => {
          getData(text)
        }}
      >
        Add Todo
      </button>
    </div>
  )
}
