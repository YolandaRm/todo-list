// TODO Yolanda
import React from 'react';
import TodoCard from './todo-card';

const item = {
    "id": 1,
    "text": "Hacer la compra",
    "status": "completed"
};

class TodoList extends React.Component {
    // constructor que inicializa el estado a tasks:[]
    // cuando se pinte el componente en el componentDidMount tienes que hacer un fetch para coger la lista
    // de tareas y actualizar el estado
    render() {
        // Por cada tarea en el estado pintar un TodoCard
        return (
            <div>
                <h1>Todo List</h1>
                <TodoCard item={item} />
            </div>
        );
    }
}

export default TodoList;