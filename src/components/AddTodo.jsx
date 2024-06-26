// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

export default function Modal() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const inputHandler = (e) => {
    e.preventDefault()
    setModal(!modal)
    dispatch(addTodo(input))
    setInput("")
  }

  return (
    <>
      <div className=' text-center '>
        <h1 className=" text-4xl font-semibold pb-10">My Todos</h1>
        <button
          onClick={toggleModal}
          className="btn-modal bg-blue-400 px-8 py-2 rounded-lg text-white font-semibold"
        >
          Add Task
        </button>
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className=" absolute top-0 left-0 z-10 min-h-screen w-full bg-black opacity-35"></div>
          <div className="modal-content absolute z-30 top-0 bottom-0 right-0 left-0 m-auto 
          py-10 px-4 text-center box-content  h-[150px] w-[300px] rounded-2xl bg-white">
            <h2 className=' font-semibold text-2xl text-dark-10 pb-5'>Add New Todo</h2>
            <form onSubmit={inputHandler}>
              <div>
                <input
                  type="text"
                  placeholder="Enter new todo"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className=' border border-gray-400 outline-none block w-full px-4 py-2 rounded-lg'
                />
                <div className=' flex gap-4 items-center justify-center mt-5'>
                  <button type="button" onClick={toggleModal} className=' bg-dark-10 w-[120px] py-2 font-semibold text-white rounded-lg'>
                    Close
                  </button>
                  <button className=' bg-blue-400 w-[120px] py-2 rounded-lg text-white font-semibold' type="submit" onClick={inputHandler}>
                    Add
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
