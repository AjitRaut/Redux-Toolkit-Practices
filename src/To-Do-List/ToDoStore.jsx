import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import todoslice from "./ToDoSlice"

const ToDoStore = configureStore({
    reducer : todoslice,
})

export default ToDoStore
