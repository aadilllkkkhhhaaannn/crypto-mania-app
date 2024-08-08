import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import coinService from "./coinService";

const coinSlice = createSlice({
  name: "coins",
  initialState: {
    isLoading: false,
    isError: false,
    isSuccess: false,
    coins: [],
    coin:{}
  },
  reducers: {},
  extraReducers: (bulider) => {
    bulider
      .addCase(fetchTrendingCoins.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(fetchTrendingCoins.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.coins = action.payload;
      })
      .addCase(fetchTrendingCoins.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.coins = null;
      })
      .addCase(fetchSingleCoin.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(fetchSingleCoin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.coin = action.payload;
      })
      .addCase(fetchSingleCoin.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.coin = null;
      });
      
  },
});

export default coinSlice.reducer;

// FEATCH TRANDING COINS
export const fetchTrendingCoins = createAsyncThunk("FETCH/TRENDING", async () => {
  try {
    return await coinService.fetchTrending();
  } catch (error) {
    console.log(error);
  }
});
// single coin details
export const fetchSingleCoin = createAsyncThunk("FETCH/COIN", async (id) => {
  try {
    return await coinService.fetchCoin(id);
  } catch (error) {
    console.log(error);
  }
});
