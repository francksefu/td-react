import TodoItem from "./TodoItem"

const TodoList = ({todosProps, setTodos, handleChange, delTodo}) => {
  return(
    <ul>
      {todosProps.map((todo) => (
          <TodoItem key={todo.id} item={todo} setTodos={setTodos} handleChange={handleChange} delTodo={delTodo}/>
      ))}
    </ul>
  );
}

export default TodoList;