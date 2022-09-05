import { createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({
    name: 'menu',
    initialState: {
        value: true
    },
    reducers: {
         open: (state, action) => {
            
             state.value = action.payload
            
        }
    }
});


export const { open } = menuSlice.actions;
export default menuSlice.reducer