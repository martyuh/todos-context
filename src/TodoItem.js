import React, { useContext } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import CheckBox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import useToggleState from './hooks/useToggleState'
import EditTodoForm from './EditTodoForm'
import {TodosContext} from './context/todosContext'

const TodoItem = ({task,completed,id}) => {
 
    //custom hook to toggle whether the todoitem is being edited
    const [isEditing,toggle] = useToggleState(false)
    // destructure removetodo toggletodo edittodo from todostuff
    const{removeTodo,toggleTodo} = useContext(TodosContext)

    return (
        //if isediting is toggled show form if not show todoitem
        <ListItem style={{height:'100px'}}>
        { isEditing ? <EditTodoForm task={task} id={id} toggleEditForm={toggle}/>:
        <><CheckBox tabIndex={-1} checked={completed} onClick={()=>toggleTodo(id)}/>
        <ListItemText style={{textDecoration: completed?'line-through':'none'}}>
            {task} 
        </ListItemText>
        <ListItemSecondaryAction>
        {/* call toggle to flip state which renders form */}
        <IconButton aria-label='Edit' onClick={toggle}>
        <EditIcon/>
        </IconButton>
        <IconButton aria-label='Delete' onClick={()=>removeTodo(id)}>
        <DeleteIcon />
        </IconButton>
        </ListItemSecondaryAction></>
        }
    </ListItem>
    )
}

export default TodoItem 
