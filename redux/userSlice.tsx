import { createSlice, Draft, PayloadAction  } from "@reduxjs/toolkit";

type userInfo = {
   username: string,
   email: string
}

const initialState: userInfo = {
    username: "",
    email : "",
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        addStudent: (state:Draft<typeof initialState>, action:PayloadAction<typeof initialState>) =>{
            state.username =action.payload?.username,
            state.email = action.payload?.email
        },
        updateStudent: (state:Draft<typeof initialState>, action:PayloadAction<typeof initialState>) =>{
            state.username =action.payload?.username,
            state.email = action.payload?.email
        },
        deleteStudent: (state:Draft<typeof initialState>, action:PayloadAction<typeof initialState>) =>{
            state.username =action.payload?.username,
            state.email = action.payload?.email
        }
    },
})

// A small helper of user state for `useSelector` function.
//export const getUserState = (state: { user: userInfo }) => state.user;

export const {updateStudent, addStudent,deleteStudent} = userSlice.actions;
export default userSlice.reducer;

