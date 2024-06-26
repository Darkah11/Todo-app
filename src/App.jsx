import './App.css'
import TodoList from './components/TodoList'
import AddTodo from './components/AddTodo'

function App() {

  return (
    <>
      <div className=' px-5 py-10'>
        <AddTodo />
        <TodoList />
      </div> 
    </>
  )
}

export default App
