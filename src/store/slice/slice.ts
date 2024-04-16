import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IMyCard } from '../type';

const order = JSON.parse(localStorage.getItem("carts") as string) || []

export interface CounterState {
  nameNav: string;
  itemId: number | null;
  sizeId: number | null;
  isCategor: boolean;
  countDevice: number;
  orderData: IMyCard
}

const initialState: CounterState = {
  nameNav: '',
  itemId: 0,
  sizeId: 0,
  isCategor: false,
  countDevice: 1,
  orderData: order
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
    handleCountDevice: (state, action: PayloadAction<number>) => {
      state.countDevice = action.payload;
    },
    handleOrderData: (state, action: PayloadAction<IMyCard>) => {
      state.orderData = action.payload;
    },
  },
})

export const { SetNameNav, handleItemId, handleIsCategor, handleCountDevice } = slice.actions

export default slice.reducer