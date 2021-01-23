import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

import { fetchData } from "src/actions/data";

export const offersAdapter = createEntityAdapter<API.Offer>();

export const offersSlice = createSlice({
  name: "offers",
  initialState: offersAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      offersAdapter.setAll(state, action.payload.widget.data.offers);
    });
  },
});

export default offersSlice.reducer;
