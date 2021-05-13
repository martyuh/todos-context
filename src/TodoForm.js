import React,{useState,useContext} from 'react'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import useInputState from './hooks/useInputState'
import {TodosContext, TodosProvider} from './context/todosContext'

const TodoForm = (props) => {
    // use custom hook useInputState
    const[value,handleChange,reset]=useInputState('')
    const{addTodo} =useContext(TodosContext)

    const submitForm = (e) =>{
        e.preventDefault()
        addTodo(value)
        reset()
    }

    return (
        <Paper style={{margin:'1rem 0',padding:'0 1rem'}}>
            <form onSubmit={submitForm} style={{marginLeft:'.7rem'}}>
            <TextField 
            value={value} 
            onChange={handleChange} 
            margin='normal' 
            label='Add New Todo'
            fullWidth    
            />
            <button>Submit</button>
            </form>
        </Paper>
    )
}

export default TodoForm
