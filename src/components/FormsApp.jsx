import React from 'react';
import { useForm } from '../hooks/useForm';


export const FormsApp = () => {
    const initialForm = {
        username: '',
        nickName: '',
        email: '',
        password: ''
    };

    const { formState, onInputChange } = useForm(); // Desestructura las propiedades del hook

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">Username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="userName" 
                        name='username'
                        value={formState.username} // Utiliza formState.username en lugar de username
                        onChange={onInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="nickName" className="form-label">Nickname</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="nickName" 
                        name='nickName'
                        value={formState.nickName} // Utiliza formState.nickName en lugar de nickName
                        onChange={onInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name='email'
                        value={formState.email} // Utiliza formState.email en lugar de email
                        onChange={onInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        name='password'
                        value={formState.password} // Utiliza formState.password en lugar de password
                        onChange={onInputChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
};
