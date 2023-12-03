import { createSlice } from '@reduxjs/toolkit'

const modalMenu = createSlice({
    
    name: 'modal',
    initialState: { isOpenModal: false },
    reducers: {
        toggleModal: (state) => {
        state.isOpenModal= !state.isOpenModal ;
        },

    },
});


export const {toggleModal}= modalMenu.actions
export const modalReducer  = modalMenu.reducer;