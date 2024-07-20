import React, { useEffect, useRef } from 'react';
import { useForm } from '../hooks/useForm';

export const FormsApp = () => {
    const initialForm = {
        username: '',
        nickName: '',
        email: '',
        password: ''
    };

    const { formState, onInputChange } = useForm(initialForm);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState);
    };

    const focusRef = useRef();

    useEffect(() => {
        focusRef.current.focus();
    }, []);

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
                        value={formState.username}
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
                        value={formState.nickName}
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
                        value={formState.email}
                        onChange={onInputChange}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                    ref={focusRef}
                        type="password" 
                        className="form-control" 
                        id="password" 
                        name='password'
                        value={formState.password}
                        onChange={onInputChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    );
};
