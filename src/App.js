import { useState } from 'react'
import { TodoList } from './components/todo-list'
import { startTodolist } from './data'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import {  } from 'styled-components'


const GLobal = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.colors.bg};
}
h2 {
  background-color: #9cf;
}
`

const StyledTodoList = styled(TodoList)`
& h2 {
  color: red
}
& ul {
background-color: #3d8a1f;
}  
`

const theme = {
colors: {
  bg: '#444',
  text: 'yellow'
}
}
  

function App() {
  const [todos, setTodos] = useState(startTodolist)

  const getOverdueTodos = () => {
    const today = new Date()
    return todos.filter((todo) => !todo.isDone && new Date(todo.deadline) < today)
  }

  const getActualTodos = () => {
    const today = new Date()
    return todos.filter((todo) => !todo.isDone && new Date(todo.deadline) >= today)
  }

  const getComplitedTodos = () => {
    const today = new Date()
    return todos.filter((todo) => todo.isDone)
  }

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone }
      } else {
        return todo
      }
    })
    setTodos(updatedTodos)
  }

  const TitleToDo = styled.h1`
  text-decoration: underline;
`;


  return (
    <ThemeProvider theme={theme}>
      <GLobal />
      <TitleToDo>Todo List</TitleToDo>
      <TodoList
        title="Overdue"
        items={getOverdueTodos()}
        onToggleTodo={toggleTodo}
      />
      <StyledTodoList
        title="Actual"
        items={getActualTodos()}
        onToggleTodo={toggleTodo}
      />
      <TodoList
        title="Complited"
        items={getComplitedTodos()}
        onToggleTodo={toggleTodo}
      />
    </ThemeProvider>
  )
}


export default App
