import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../fakeData";

export const userSlice = createSlice({
  name: "users",
  initialState: { value: UsersData },
  reducers: {
    // giving command to create a new user
    addUser: (state, action) => {
      state.value.push(action.payload);
    },

    // giving command to delete th existing user 
    deleteUser: (state, action) => {
      state.value = state.value.filter((user) => user.id !== action.payload.id);
    },

    // giving command to update the username of existing id
    updateUsername: (state, action) => {
      state.value.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username;
        }
      });
    },
  },
});

export const { addUser, deleteUser, updateUsername } = userSlice.actions;
export default userSlice.reducer;
