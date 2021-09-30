import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  navigation: [
    'Model S',
    'Model 3',
    'Model X',
    'Model Y',
    'Solar Panels',
    'Solar Roofs',
    'Accessories',
  ],
};
const menuSlice = createSlice({
  name: 'MENU',
  initialState,
  reducers: {},
});
export const selectMenus = (state) => state.MENU.naviation;
export default menuSlice.reducer;
