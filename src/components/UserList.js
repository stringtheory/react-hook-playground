import React, { useState, useEffect } from 'react';
import axios from "axios";

const URL = 'https://jsonplaceholder.typicode.com/users';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const { data } = await axios.get(URL);
            setUsers(data);
        };

        fetchUsers();
    }, []);

    const renderedUsers = users.map((user) => {
        return <li key={user.id}>{user.name}</li>;
    });

    return (
        <ul>
            {renderedUsers}
        </ul>
    );
};

export default UserList;