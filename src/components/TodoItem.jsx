import { useState } from 'react';
import { PropTypes } from 'prop-types';
import styles from '../styles/TodoItem.module.css';

const TodoItem = ({
  item, handleChange, delTodo, setUpdate,
}) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <li className={styles.item}>
      <div className={styles.content} style={viewMode}>
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => handleChange(item.id)}
        />
        {item.title}
        <button type="button" onClick={() => delTodo(item.id)}>Delete</button>
        <button type="button" onClick={handleEditing}>Edit</button>
      </div>
      <input
        type="text"
        defaultValue={item.title}
        className={styles.textInput}
        style={editMode}
        onChange={(e) => setUpdate(e.target.value, item.id)}
        onKeyDown={handleUpdateDone}
      />
    </li>
  );
};

TodoItem.propTypes = {
  item: PropTypes.instanceOf({}).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
export default TodoItem;
