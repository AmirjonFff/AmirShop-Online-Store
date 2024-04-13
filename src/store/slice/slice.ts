import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  nameNav: string,
  itemId: number | null;
  sizeId: number | null;
  isCategor: boolean;
}

const initialState: CounterState = {
  nameNav: '',
  itemId: 0,
  sizeId: 0,
  isCategor: false
}

export const slice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    SetNameNav: (state, action: PayloadAction<string>) => {
      state.nameNav += action.payload
    },
    handleItemId: (state, action: PayloadAction<number>) => {
      state.itemId = action.payload;
    },
    handleSizeId: (state, action: PayloadAction<number>) => {
      state.itemId = action.payload;
    },
    handleIsCategor: (state, action: PayloadAction<boolean>) => {
      state.isCategor = action.payload;
    },
  },
})

export const { SetNameNav, handleItemId, handleIsCategor } = slice.actions

export default slice.reducer