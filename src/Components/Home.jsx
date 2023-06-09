// import React from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux";
import { deleteUser } from "../Reducers/userReducers";

function Home() {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)//Get users from redux store
    // console.log("Here is users...........", users)

    const handleDelete = (id) => {
        if (window.confirm("Are you sure want to delete?")) {
            dispatch(deleteUser({
            id: id
        }))
        }
    }

    return (
        <div className="container">
            <h2 className="mt-3">CRUD Example App</h2>
            <Link to="/create">
                <button className="btn btn-primary my-3">Create + </button>
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Phone No.</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Operate</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.phone_no}</td>
                                <td>{user.email}</td>
                                <td>{user.address}</td>
                                <td>
                                    <Link to={`/edit/${user.id}`} className="btn btn-warning">Edit</Link>
                                    <button onClick={() => handleDelete(user.id)} className="btn btn-danger ms-2">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default Home