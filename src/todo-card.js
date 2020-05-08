// TODO: Javier
import React from 'react';

/**
 * props: {
 *  item: tarea de la cual tienes que pintar la información
 * }
 * 
 */
export default class TodoCard extends React.Component {
    _removeTask = () => {
        // con fetch tienes que hacer un delete
        // cuando se pulse el boton de borrar tarea
    }

    _completado = (newStatus) => {
        // con fetch un put para actualizar el status de la tarea
        // cuando se pulse el boton de completar, descartar
    }

    _eliminar= async () => {
        const id = this.props.item.id;
        await fetch ('http://localhost:3005/tasks/${id}'.{
            method: 'DELETE'
        }) 

    }

    _descartado = () => {


    }

    _getClassName() {
        let className = 'todo-card';
        if (this.props.item.status === 'completed')
        {
            className += ' todo-card--completed'
        }
        if  (this.props.item.status === 'pending')
        {
            className += ' todo-card--pending'
        }
        if  (this.props.item.status === 'discarded')
        {
            className += ' todo-card--discarded'
        }
        return className;
        // en funcion del estado de la tarea tiene que devolver una clase de css
        // --completada, --pendiente, --descartada
    }

    render() {
        // devolver un html que pinte this.props.item.text y los 3 botones
        return (
        <div className={this._getClassName()}>
            <span>{this.props.item.text}</span>
            <button onClick={this._completado}  className='todo-card__button'>Completar</button>
            <button onClick={this._descartado} className='todo-card__button'>Descartar</button>
            <button onClick={this._eliminar} className='todo-card__button'>Eliminar</button>
        </div>
        );
    }

}