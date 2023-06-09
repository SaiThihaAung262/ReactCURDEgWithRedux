import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../assets/Data/Users";
const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers: {
        //Add user function
        addUser: (state, action) => {
            console.log(action);
            state.push(action.payload)
        },

        //Update user fucntion
        updateUser: (state, action) => {
            const {id, name, phone_no, email, address} = action.payload
            const updateUser = state.find(user => user.id == id)
            if(updateUser){
                updateUser.name = name
                updateUser.phone_no = phone_no
                updateUser.email = email
                updateUser.address = address
            }
        },

        //Delete user function
        deleteUser: (state, action) => {
            const {id} = action.payload
            const deleteUser = state.find(user => user.id == id)
            if(deleteUser){
                return state.filter((user) => user.id !== id)
            }

        }
    }
})

export default userSlice.reducer
export const {addUser, updateUser, deleteUser} = userSlice.actions