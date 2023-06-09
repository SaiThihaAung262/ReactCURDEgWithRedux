import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addUser } from "../Reducers/userReducers"
import "./../App.css"

function Create(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const users = useSelector((state) => state.users)

    const [name, setName] = useState("")
    const [phone_no, setPhoneNo] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")

    const [showAlert, setShowAlert] = useState(false)

    const handleSubmit = (event) => {

        event.preventDefault();
        console.log("here is submit");
        if(name === '' || email === '' || phone_no === '' || address === ''){
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 2000);
            return
        }

        dispatch(addUser({
            id: users[users.length - 1].id + 1,
            name: name,
            phone_no: phone_no,
            email: email,
            address: address
        }))

        navigate("/")
    }
    const Alert = showAlert && 
            <div className="alert alert-danger" role="alert">
                Please fill all fields!
            </div>;

    return (
        <div className="d-flex flex-column w-100 vh-100 justify-content-center align-items-center">
            {Alert}
            <Link to="/">
                <button className="btn btn-secondary">Back</button>
            </Link>
            <br />
            <div className="w-50 border bg-secondary text-white p-5 rounded">
                <h3>Add new user</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" className="form-control" placeholder="Please enter name" onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="phone_no">Phone No.</label>
                        <input type="text" name="phone_no" className="form-control" placeholder="Please enter phone number" onChange={e => setPhoneNo(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" className="form-control" placeholder="Please enter email" onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" className="form-control" placeholder="Please enter address" onChange={e => setAddress(e.target.value)} />
                    </div>
                    <button className="btn btn-info mt-3">Add to</button>
                </form>
            </div>
        </div>
    )
}

export default Create