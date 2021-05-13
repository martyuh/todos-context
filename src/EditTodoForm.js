import {useContext} from 'react'
import TextField from '@material-ui/core/TextField'
import useInputState from './hooks/useInputState'
import Paper from '@material-ui/core/Paper'
import {TodosContext} from './context/todosContext'

const EditTodoForm = ({task,id,toggleEditForm}) => {

    // destructure edittodo from todoscontext
    const {editTodo} = useContext(TodosContext)
    
    const [value,handleChange,reset]=useInputState(task)

    const submitForm = (e) =>{
        e.preventDefault()
        editTodo(id,value)
        reset()
        toggleEditForm()
    }

    return (
        
            <form onSubmit={submitForm}
            style={{marginLeft:'.7rem',width:'50%'}}
            >
            <TextField 
            value={value} 
            onChange={handleChange} 
            margin='normal' 
            label='Edit Todo'
            fullWidth    
            />
            <button>Submit</button>


            </form>
       
    )
}

export default EditTodoForm
