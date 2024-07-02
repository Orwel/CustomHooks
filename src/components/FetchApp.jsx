import { useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';

export const FetchApp = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const { data, isLoading, error } = useFetch(url);
    

    useEffect(() => {
       
        fetchData(url, 'GET');
    }, []);

    const fetchData= async (url, method, bodyData = null) => {
        if (!url) return;
        try {
            const options = {
                method: method,
                headers: { 'Content-Type': 'application/json; charset=utf-8' },
                body: method === 'GET' || method === 'DELETE' ? null : JSON.stringify(bodyData)
            };
            // Aquí puedes hacer la llamada a la API utilizando fetch o axios
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <h2>Lista usuarios</h2>

            {isLoading ? (
                <p>Cargando...</p>
            ) : error ? (
                <p>Hubo un error: {error}</p>
            ) : (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((user) => (
                            <tr key={user.id}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.website}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <hr />
        </>
    );
};
