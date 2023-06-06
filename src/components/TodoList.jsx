import { PropTypes } from 'prop-types';
import TodoItem from './TodoItem';

const TodoList = ({
  todosProps, handleChange, delTodo, setUpdate,
}) => (
  <ul>
    {todosProps?.map((todo) => (
      <TodoItem
        key={todo.id}
        setUpdate={setUpdate}
        item={todo}
        handleChange={handleChange}
        delTodo={delTodo}
      />
    ))}
  </ul>
);

TodoList.propTypes = {
  todosProps: PropTypes.instanceOf({}).isRequired,
  handleChange: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};

export default TodoList;
