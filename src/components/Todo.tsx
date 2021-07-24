import React from 'react';

interface IProps{
    firstName:string,
    lastName: string,
    email?:string,
    handleRemove: (email: string) => void
}

const Todo = ({firstName, lastName, email = "N/A", handleRemove}: IProps) => {
    return (
        <div>
            <div className="user">
            <p><strong>FullName: </strong>{firstName +" " + lastName}</p>
            <p><strong>Email: </strong>{email}</p>
            <button className="input" onClick={() => handleRemove(email)}>Remove</button>
        </div>
        </div>
    );
};

export default Todo;