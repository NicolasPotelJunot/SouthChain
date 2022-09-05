import { configureStore } from '@reduxjs/toolkit'
import menuSlice  from "./menuSlicer";

export const store = configureStore({
  reducer: {menuSlice},
})