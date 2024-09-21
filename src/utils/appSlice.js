import {createSlice} from "@reduxjs/toolkit"

const appSlice = createSlice({
    name:"app",
    initialState:{
        sideNavOpen:true,
    },
    reducers:{
        toggleSideNav : (state)=>{
            state.sideNavOpen=!state.sideNavOpen
        },
        closeSideNav : (state)=>{
            state.sideNavOpen=false
        }
    }
})
export const {toggleSideNav,closeSideNav} = appSlice.actions

export default appSlice.reducer