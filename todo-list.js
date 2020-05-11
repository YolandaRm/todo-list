// TODO Yolanda
/*Obtiene todas las tareas del servidor y por cada una pinta un TodoCard
Trabajar con listas y hacer peticiones get con fetch*/


import React from 'react';
import TodoCard from './todo-card';

const item = {
    "id": 1,
    "text": "Hacer la compra",
    "status": "pending"
};

class TodoList extends React.Component {
    // constructor que inicializa el estado a tasks:[]
    constructor (props) {
        super(props);
        this.state = {
           task: []
     }
    this.componentDidMount(){
        this.getTask();
    }
    async _getTasks(){
        const url = `http://localhost:3005/tasks`;//hacemos un fetch para coger la lista d tareas
        const response = await fetch(url, {method: 'GET'})//aplicamos el metodo get
        const body = await response.json();//y sacamos el body (db) de donde me llegan todas las tareas
        this.setState({task: body});// y actualizamos llamando al setState
        //que cambia al estado y vuelve a llamar al componente
    }
    render() {
        // Por cada tarea en el estado pintar un TodoCard
        const {Todolist} = 
        return (
            <div className='todo-card'>//para crear el estilo posterior
                {this.state.tasks.map((task)=> {  //quizás habría que poner la function del estado d todoCard?
                    return <MenuItem key={item.id}text={item.text}status= {item.status}/>
                })}
                <h1>Todo List</h1>
                <TodoCard item={item} />
            </div>
        );
    }
}

export default TodoList;

