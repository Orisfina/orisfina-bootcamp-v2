import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { updateStudent } from "../redux/userSlice";

/*
onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
 const handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => {
        e.preventDefault();
        useDispatch(updateStudent(user) )
    }
const [name, setName] = useState<string>('');
*/
export default function Update() {
    const [username, setuserName] = useState('');
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();

    const user={
        email:email,
        username:username
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateStudent(user) )
    }
    return (
        <>
            <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setuserName(e.target.value)}
            />
            <br/>
            <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <input type="submit" value="Update" onClick={handleSubmit} />
        </>
    )
}
