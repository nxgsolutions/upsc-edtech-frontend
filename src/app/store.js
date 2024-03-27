import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './redux/counterSlice'
export const makeStore = () => {
  return configureStore({
    reducer: {
        counter: counterSlice
    }
  })
}