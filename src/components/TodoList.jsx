// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {updateTodo, removeTodo} from "../features/todo/todoSlice"
import { useState } from 'react'


function TodoList() {
  const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    

    const [modal, setModal] = useState(false)
    const [newtext, setNewText] = useState("")
    const [id, setId] = useState()

  const toggleModal = (id, text) => {
    setNewText(text)
    setId(id)
    setModal(!modal)
  }

  const editHandler = (e) => {
    e.preventDefault()
    setModal(!modal)
    dispatch(updateTodo({text: newtext, id: id}))
    setNewText("")
  }

  return (
    <>
    <div className=' max-w-[800px] mx-auto flex flex-col gap-4 mt-16'>
    {todos.map((todo) => (
      <div key={todo.id} className=' w-full bg-dark-10 flex justify-between px-5 py-3 rounded-lg'>
        <p className=' max-w-[70%] text-white capitalize'>{todo.text}</p>
        <div className=' flex items-center gap-2'>
          <button className=' text-white bg-blue-400 w-[25px] h-[25px] px-[3px] rounded-[4px]'
          onClick={() => toggleModal(todo.id, todo.text)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#ffffff" d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"/></svg>
          </button>
          <button
          className=' text-white bg-red-600 w-[25px] h-[25px] px-[4px] rounded-[4px]'
          onClick={() => dispatch(removeTodo(todo.id))}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
          </button>
        </div>
      </div>
    ))}
    </div>
    {modal && (
        <div className="modal">
          <div onClick={toggleModal} className=" absolute top-0 left-0 z-10 min-h-screen w-full bg-black opacity-35"></div>
          <div className="modal-content absolute z-30 top-0 bottom-0 right-0 left-0 m-auto 
          py-10 px-4 text-center box-content  h-[150px] w-[300px] rounded-2xl bg-white">
            <h2 className=' font-semibold text-2xl text-dark-10 pb-5'>Add New Todo</h2>
            <form onSubmit={() => editHandler()}>
              <div>
                <input
                  type="text"
                  placeholder="Enter new todo"
                  value={newtext}
                  onChange={(e) => setNewText(e.target.value)}
                  className=' border border-gray-400 outline-none block w-full px-4 py-2 rounded-lg'
                />
                <div className=' flex gap-4 items-center justify-center mt-5'>
                  <button type="button" onClick={toggleModal} className=' bg-dark-10 w-[120px] py-2 font-semibold text-white rounded-lg'>
                    Close
                  </button>
                  <button className=' bg-blue-400 w-[120px] py-2 rounded-lg text-white font-semibold' 
                  type="submit" onClick={editHandler}>
                    save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default TodoList