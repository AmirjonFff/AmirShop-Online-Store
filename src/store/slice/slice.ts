import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  nameNav: string
}

const initialState: CounterState = {
  nameNav: '',
}

export const slice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<string>) => {
      state.nameNav += action.payload
    },
  },
})


export const { incrementByAmount } = slice.actions

export default slice.reducer