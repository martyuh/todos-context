//todos
//all methods that interact with todos
import {createContext} from 'react'
import useTodoState from '../hooks/useTodoState'

//this will be rendered if nothing is in storage
const defaultTodos = [
    { id: 1, task: "Mow the lawn using goats", completed: false },
    { id: 2, task: "Release lady bugs into garden", completed: true }
  ];

//  create a context
export const TodosContext = createContext()
// provides the data via the value prop to the children components 
//wrapped in the provider element
export const TodosProvider = (props)=>{
    // custom hook usetodostate is returned as object instead of array, so it is destructured //with curly braces instead of brackets
    //when useTodoState is called the defaultval is passed as initialTodos, but with 
    //usetodostate the key is also set. within useTodoState it accesses localStorage to grab 
    //the todos state, if todos aren't present it sets the default value. Also, when the 
    //state is changed in useTodoState it automatically sets localStorage
    // you can destructure the state and methods out of the object that is returned from
    //useTodoState but you can also assign the entire object with the state and methods 
    //to a variable to make the code cleaner
    // const {todos,removeTodo,addTodo,toggleTodo,editTodo}=useTodoState(defaultTodos)
    // updates whenever todos is updated
    //this however causes other components to rerender even if they aren't pulling state from 
    // the context. the rerender because they are dependant on the todo prevent that by
    //splitting the context to have a context for state and a context for methods
    const todoStuff =useTodoState(defaultTodos)
    // provider provides access to state and methods in the context and wraps around child
    //component props passed as children from the app component
    return (
        //todoStuff is already an object so you do not need to pass it in an object
    <TodosContext.Provider value={todoStuff}>
    {props.children}
    </TodosContext.Provider>
    )
}
