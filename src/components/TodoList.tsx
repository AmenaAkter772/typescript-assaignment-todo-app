import React, { useState } from 'react';
import './TodoList.css'
import Todo from './Todo';


interface IUser {
    firstName: string,
    lastName: string,
    email: string
}

const TodoList = () => {
    const [user, setUser] = useState<IUser>({} as IUser);
    const [userList, setUserList] = useState<IUser[]>([]);

    const clickHandler = () => {
        setUserList([...userList, user]);
        setUser(
            {
                firstName: "",
                lastName: "",
                email: ""
            }
        )
    }

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const handleRemove = (email: string) => {
        const newContactList = userList.filter(t => t.email !== email);
        setUserList(newContactList)
    }

    return (
        <div>
            <div className="row">
                <div className="inputGroup">
                    <input className="input" value={user.firstName} onChange={onChange} name="firstName" type="text" placeholder="enter firstName" /><br></br>
                    <input className="input" value={user.lastName} onChange={onChange} name="lastName" type="text" placeholder="enter lastName" /><br></br>
                    <input className="input" value={user.email} onChange={onChange} name="email" type="text" placeholder="enter email" />
                </div>
                <div  className="btn"><button className="button" onClick={clickHandler}>Add User</button></div>
            </div>
            {
                userList.map((TodoName) => <Todo key={TodoName.email} firstName={TodoName.firstName} lastName={TodoName.lastName} email={TodoName.email} handleRemove={handleRemove}></Todo>)
            }
        </div>
    );
};

export default TodoList;