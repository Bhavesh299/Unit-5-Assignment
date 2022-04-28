export const TodoItem = ({ todo, handleStatus }) => {
  return (
    <div className="TodoItems">
      
      {todo.title}-{todo.status ? 'Done' : 'Not Done'}
      <button onClick={() => handleStatus(todo.id)} className="Togglebutton">Toggle</button>
    </div>
  )
}
