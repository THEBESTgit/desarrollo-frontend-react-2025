import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    module: "React Mod7",
    username: localStorage.getItem("username") || "",  // Leer desde localStorage
    email: localStorage.getItem("email") || "",  // Leer desde localStorage
    password: localStorage.getItem("password") || "",  // Leer desde localStorage
};

const formSlice = createSlice({
    name: "form",
    initialState,
    reducers: {
        saveFormData: (state, action) => {
            const { username, email, password } = action.payload;

            // Solo guarda los datos si el password es válido
            if (password === "mod7USIP-TUNOMBRE") {
                state.username = username;
                state.email = email;
                state.password = password;

                // Guardar los datos en localStorage
                localStorage.setItem("username", username);
                localStorage.setItem("email", email);
                localStorage.setItem("password", password);
            }
        },
        clearFormData: (state) => {
            state.username = "";
            state.email = "";
            state.password = "";

            // Eliminar los datos del localStorage
            localStorage.removeItem("username");
            localStorage.removeItem("email");
            localStorage.removeItem("password");
        },
    },
});

export const { saveFormData, clearFormData } = formSlice.actions;
export default formSlice.reducer;


