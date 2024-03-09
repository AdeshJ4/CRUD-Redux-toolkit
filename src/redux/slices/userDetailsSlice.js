import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// create User
export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch("http://localhost:5000/api/customers", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    try {
      const result = await response.json();
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// show user
export const showUser = createAsyncThunk(
  "showUser",
  async (args, { rejectWithValue }) => {
    const response = await fetch("http://localhost:5000/api/customers");
    try {
      const result = await response.json();
      console.log("result: ", result);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

// delete user
export const deleteUser = createAsyncThunk(
  "deleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(`http://localhost:5000/api/customers/${id}`, {
      method: "DELETE",
    });
    try {
      const result = await response.json();
      console.log("result: ", result);
      return result;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const userDetailSlice = createSlice({
  name: "userDetail",
  initialState: { users: [], isLoading: false, error: null }, // users: [{count: 0, customers: Array(5)[{}, {}, ..., {}]}]
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users.push(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(showUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(showUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      .addCase(showUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });

    builder
      .addCase(deleteUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("delete action: ", action.payload);
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {} = userDetailSlice.actions;
export default userDetailSlice.reducer;
