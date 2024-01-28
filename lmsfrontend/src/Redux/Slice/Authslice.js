import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    isLoggdIn:localStorage.getItem('isLoggdIn')||false,
    role:localStorage.getItem('role')||'',
    data:localStorage.getItem('data')||{}
}
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{}
})
export default authSlice.reducer