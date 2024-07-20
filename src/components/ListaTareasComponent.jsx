import { useForm } from '../hooks/useForm';
import React, { useReducer } from 'react';

export const ListaTareasComponent = () => {

    const initialState = [
        { id: 1, name: 'Explicar Reducers', finalizada: false }
    ]

    const tareaReducer = (state = initialState, action = {}) => {

        switch (action.type) {
            case '[TAREAS] Agregar Tarea':
                return [...state, action.payload]
            case '[TAREAS] Finalizar Tarea':
                return state.map(tarea => {
                    if (tarea.id === action.payload) {
                        return {
                            ...tarea,
                            finalizada: !tarea.finalizada
                        }
                    } else return tarea
                    }
                )
            case '[TAREAS] Eliminar Tarea':
                return state.filter(tarea => tarea.id !== action.payload)
            case '[TAREAS] Borrar Tareas':
                return []
            default:
                break;
        }
        
        return state
    }

    const addTask = (event) => {
        event.preventDefault()
        if(tarea.tarea === '') return
        const nuevaTarea = {
            id: new Date().getTime(),
            name: tarea.tarea,
            finalizada: false
        }
        const action = {
            type: '[TAREAS] Agregar Tarea',
            payload: nuevaTarea
        }
        dispatch(action)
    }

    const endTask = (id) => {
        console.log(id)
        const action = {
            type: '[TAREAS] Finalizar Tarea',
            payload: id
        }
        dispatch(action)
        console.log(state)
    }

    const deleteTask = (id) => {
        const action = {
            type: '[TAREAS] Eliminar Tarea',
            payload: id
        }
        dispatch(action)
    }

    const deleteAll = () => {
        const action = {
            type: '[TAREAS] Borrar Tareas',
        }
        dispatch(action)
    }

    const { formState: tarea, onInputChange } = useForm({tarea: ''})
 
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
                
                <button type="submit" className="btn btn-primary">Agregar</button>
                <button type="button" className="btn btn-danger m-2" onClick={(deleteAll)}>Borrar Todas</button>
            </form>
            <hr/>
            <ul className='list-group'>
                {state.map(tarea => {
                    return (
                    <li 
                    className='list-group-item d-flex justify-content-between align-items-center' 
                    key={tarea.id}
                    >
                        <span>{tarea.name}</span>
                        <div>
                        <input 
                        type="checkbox"
                        value={tarea.finalizada}
                        onChange={() => endTask(tarea.id)}
                        />
                        <button 
                        className="btn btn-danger m-2"
                        onClick={() => deleteTask(tarea.id)}
                        >Eliminar</button>
                    </div>
                    </li>
                    )
                }
             )}
            </ul>
        </>
    )
}