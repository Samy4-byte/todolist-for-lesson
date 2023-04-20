import { TodoItem } from '../todo-item'
import styled, { css } from 'styled-components'

const Title = styled.h2`
color: blue;
font-size: 30px;
margin: 0;
`

const Ul = styled.ul`
  list-style : none;
  padding: 20px;
  background-color: #eee;
  border: 1px solid red;
  margin: 0;
`


export const TodoList = ({ title, items, onToggleTodo, className }) => {
  return (
    <div className={className}>
      <Title>{title}</Title>
      <Ul>
        {
          items.map((todo, index) => (
            <TodoItem 
            isActive={index === 1}
              key={todo.id}
              {...todo}
              onToggleTodo={onToggleTodo}
            />
          ))
        }
      </Ul>
    </div>
  )
}
