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
    _complete = (newStatus) => {
        // con fetch un put para actualizar el status de la tarea
        // cuando se pulse el boton de completar, descartar
    }
    _pendiente = () => {

    }
    _descartado = () => {

    }
    _getClassName() {
        // en funcion del estado de la tarea tiene que devolver una clase de css
        // --completada, --pendiente, --descartada
    }
    render() {
        // devolver un html que pinte this.props.item.text y los 3 botones
        return (
        <Button onClick={_compplete}>Completado</Button>
        <Button onClick={_discard}>Pendiente</Button>
        <Button onClick={_descartado}>Descartado</Button>
        );
    }

}