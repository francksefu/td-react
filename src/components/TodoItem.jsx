import styles from "../styles/TodoItem.module.css"

const TodoItem = ({item, handleChange, delTodo}) => {
  return(
    <li className={styles.item}>
      <div className={styles.content}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => handleChange(item.id)}
        />{item.title}
        <button onClick={() => delTodo(item.id)}>Delete</button>
      </div>
      
    </li>
  )
}

export default TodoItem;