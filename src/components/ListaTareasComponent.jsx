import { useForm } from '../hooks/useForm';
import React, { useReducer } from 'react';

export const ListaTareasComponent = () => {

    const initialState = [
        { id: 1, name: 'Explicar Reducers', finalizada: false }
    ]

    const nuevaTarea = { id: 2, name: 'Explicar Reducers', finalizada: false };

    const tareaAEditar = { id: 1, name: 'Explicar Diapositiva de Reducer', finalizada: false };

    const agregarTarea = {
        type: '[TAREAS] Agregar Tarea',
        payload: nuevaTarea
    }

    const editarTarea = {
        type: '[TAREAS] Editar Tarea',
        payload: tareaAEditar
    }

    const eliminarTarea = {
        type: '[TAREAS] Eliminar Tarea',
    }

    const borrarTareas = {
        type: '[TAREAS] Borrar Tareas',
    }



    const tareaReducer = (state = initialState, action = {}) => {

        switch (action.type) {
            case '[TAREAS] Agregar Tarea':
                return [...state, action.payload]
            case '[TAREAS] Editar Tarea':
                return [...state, action.payload]
            case '[TAREAS] Eliminar Tarea':
                return [...state, action.payload]
            case '[TAREAS] Borrar Tareas':
                return []
            default:
                break;
        }
        
        return state
    }

    const addTask = (event) => {
        event.preventDefault()
        console.log(tarea)
    }

    const { tarea, onInputChange } = useForm({tarea: ''})
    const [state, dispatch] = useReducer(tareaReducer, initialState)

    return (
        <>
            <form onSubmit={addTask}>
                <div className="mb-3">
                    <label htmlFor="tarea" className="form-label">Agregar tarea</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="tarea" 
                        name="tarea"
                        onChange={onInputChange}
                    />
                </div>
                
                <button type="submit" className="btn btn-primary" onSubmit={addTask}>Agregar</button>
            </form>
            <hr/>
            <ul>
                {state.map(tarea => (
                    <li key={tarea.id}>{tarea.name}</li>
                ))}
            </ul>
        </>
    )
}