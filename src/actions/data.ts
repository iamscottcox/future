import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk<API.DataModel>(
  "data/fetchData",
  async () => {
    const url =
      "https://search-api.fie.future.net.uk/widget.php?id=review&model_name=xbox_one_s&area=GB";
    const response = await fetch(url);
    const json = await response.json();

    return json;
  }
);
