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
    const {name, phone_no, email, address} = existingUser[0]

    const [updateName, setName] = useState(name)
    const [updatePhoneNo, setPhoneNo] = useState(phone_no)
    const [updateEmail, setEmail] = useState(email)
    const [updateAddress, setAddress] = useState(address)

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
            phone_no: updatePhoneNo,
            email: updateEmail,
            address: updateAddress
        }))

        navigate("/")
    }

    const Alert = showAlert && 
            <div className="alert alert-danger" role="alert">
                Please fill all fields!
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
                        <label htmlFor="phone_no">Phone No.</label>
                        <input type="text" name="phone_no" className="form-control" placeholder="Please enter phone number" value={updatePhoneNo} onChange={e => setPhoneNo(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className="form-control" placeholder="Please enter email" value={updateEmail} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" className="form-control" placeholder="Please enter address" value={updateAddress} onChange={e => setAddress(e.target.value)} />
                    </div>
                    <button className="btn btn-info mt-3">Update</button>
                </form>
            </div>
        </div>
    )
}

export default Update