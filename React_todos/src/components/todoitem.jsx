export const TodoItem = ({ todo, removeElem }) => {
  return (
    <div>
      <div className="todolistitem">
        <div>{todo.title}</div>
        <button onClick={() => removeElem(todo.id)}>clear</button>
      </div>
    </div>
  )
}
export const RemoveElem = ({ newElem }) => {
  return <div>{newElem.title}</div>
}
