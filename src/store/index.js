import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

//this function is the redux(redux tooolkit) store ---big mega reducer
const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
});

// console.log(songsSlice.actions.addSong("some song!"));

export { store, reset, addSong, removeSong, addMovie, removeMovie };
