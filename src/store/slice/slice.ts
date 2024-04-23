import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface CounterState {
  nameNav: string;
  categoryId: number | null;
  sizeId: number | null;
  isCategor: boolean;
  priceValue: number[];
}

const initialState: CounterState = {
  nameNav: '',
  categoryId: 0,
  sizeId: 0,
  isCategor: false,
  priceValue: [20, 37]
}

export const slice = createSlice({
  name: 'shop',
  initialState,
  reducers: {
    SetNameNav: (state, action: PayloadAction<string>) => {
      state.nameNav += action.payload
    },
    handleCategoryId: (state, action: PayloadAction<number>) => {
      state.categoryId = action.payload;
    },
    handleSizeId: (state, action: PayloadAction<number>) => {
      state.sizeId = action.payload;
    },
    handleIsCategor: (state, action: PayloadAction<boolean>) => {
      state.isCategor = action.payload;
    },
    handlePriceValue: (state, action: PayloadAction<number[]>) => {
      state.priceValue = action.payload;
    }
  },
})

export const { SetNameNav, handleCategoryId, handleIsCategor, handlePriceValue } = slice.actions

export default slice.reducer