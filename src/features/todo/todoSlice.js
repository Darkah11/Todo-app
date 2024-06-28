import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
        id: 1,
        text: "learn HTML"
        },
        {
        id: 2,
        text: "learn CSS"
        },
        {
        id: 3,
        text: "learn JS"
        },
        {
        id: 4,
        text: "learn react"
        },
        {
        id: 5,
        text: "learn redux toolkit"
        },
    ],
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload
            const index = state.todos.findIndex((todo) => todo.id === id);
            state.todos[index].text = text
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => 
                todo.id !== action.payload)
        }
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer