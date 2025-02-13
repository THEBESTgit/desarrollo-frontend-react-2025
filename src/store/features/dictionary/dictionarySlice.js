import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  words: [] // Array donde guardaremos las palabras con sus traducciones
};

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {
    addWord: (state, action) => {
      state.words.push(action.payload);
    },
    removeWord: (state, action) => {
      state.words = state.words.filter(word =>
        !Object.values(word).includes(action.payload) // Busca en los 3 idiomas
      );
    },
    translateWord: (state, action) => {
      const foundWord = state.words.find(word =>
        Object.values(word).includes(action.payload)
      );
      return foundWord ? foundWord : { error: "Palabra no encontrada" };
    }
  }
});

export const { addWord, removeWord, translateWord } = dictionarySlice.actions;
export default dictionarySlice.reducer;
