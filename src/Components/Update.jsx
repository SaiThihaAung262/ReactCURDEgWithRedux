import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateUser } from "../Reducers/userReducers";
import { useDispatch } from "react-redux";
function Update(){

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showAlert, setShowAlert] = useState(false)

    const {id} = useParams()
    const users = useSelector((state) => state.users)
    const existingUser = users.filter(user => user.id == id);
    const {name, email} = existingUser[0]

    const [updateName, setName] = useState(name)
    const [updateEmail, setEmail] = useState(email)

    const handleUpdate = (event) => {
        event.preventDefault()

         if(updateName === '' || updateEmail === ''){
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 2000);
            return
        }

        dispatch(updateUser({
            id: id,
            name: updateName,
            email: updateEmail
        }))

        navigate("/")
    }

    const Alert = showAlert && 
            <div className="alert alert-danger" role="alert">
                Name or Email is required!
            </div>;
    return(
        <div className="d-flex flex-column w-100 vh-100 justify-content-center align-items-center">
            {Alert}
            <Link to="/">
                <button className="btn btn-secondary">Back</button>
            </Link>
            <br />
            <div className="w-50 border bg-secondary text-white p-5 rounded">
                <h3>Add new user</h3>
                <form onSubmit={handleUpdate}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="form-control" placeholder="Please enter name" value={updateName} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" className="form-control" placeholder="Please enter email" value={updateEmail} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <button className="btn btn-info mt-3">Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update