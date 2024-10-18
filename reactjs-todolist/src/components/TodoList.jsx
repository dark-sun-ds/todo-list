/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard";

const TodoList = (props) => {
    const { todos } = props;

  return (
    <ul className="main">
      {todos.map((todo, ind) => {
        return (
          <TodoCard {...props} key={ind} index={ind} >
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  )
}

export default TodoList
