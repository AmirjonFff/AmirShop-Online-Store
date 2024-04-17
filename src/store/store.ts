import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './slice/slice'
import { deviceApi } from './api/device'

export const store = configureStore({
  reducer: {
    shop: shopReducer,
    [deviceApi.reducerPath]: deviceApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(deviceApi.middleware),
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch