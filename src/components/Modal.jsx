// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import './Modal.css'
import { useDispatch } from 'react-redux'
import {addTodo} from "../features/todo/todoSlice"

export default function Modal() {
  const [modal, setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }

  const [ input, setInput] = useState("")
  const dispatch = useDispatch()

  const inputHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input))
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Open
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <h2>Add New Todo</h2>
            <form onSubmit={inputHandler}>
              <div className=" flex items-center gap-x-4">
                <input
                  type="text"
                  placeholder="Enter new todo"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit" onClick={inputHandler}>
                  Add Todo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
