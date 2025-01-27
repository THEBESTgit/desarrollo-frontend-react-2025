import { useState } from "react";
import { motion } from "motion/react";
import { useDispatch } from "react-redux";
import useForm from "../Hooks/useForm.js";
import ModalInfo from "../../Components/Modals/ModalInfo.jsx";
import { saveFormData } from "../../store/features/form/formslice.jsx";


const FormWithMotionAndHook = ({ titleForm }) => {
    const dispatch = useDispatch();
    const { formData, handleChange, resetForm } = useForm({
        module: "React Mod7",
        username: "",
        email: "",
        password: "",
    });
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false); // Estado para controlar la visibilidad del password

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password } = formData;

        if (password === "mod7USIP-Victor") {
            dispatch(saveFormData({ username, email, password }));
            setModalMessage("¡Formulario enviado y datos guardados!");
        } else {
            setModalMessage("Error: Password incorrecto.");
        }

        setShowModal(true);
        resetForm(); // Limpia el formulario después de enviarlo
    };

    const onCloseModalInfo = () => {
        setShowModal(false);
    };

    const togglePasswordVisibility = () => {
        setPasswordVisible((prev) => !prev);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <ModalInfo
                visible={showModal}
                message={modalMessage}
                onClose={onCloseModalInfo}
            />
            <form className="fr" onSubmit={handleSubmit}>
                <h3>{titleForm}</h3>
                <label className="password">
                    Module:
                    <input
                        className="in"
                        type="text"
                        name="module"
                        value={formData.module}
                        onChange={handleChange}
                        disabled
                    />
                </label>
                <div>
                    <label className="password">
                        Username:
                        <input
                            className="in"
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div>
                    <label className="password">
                        Email:
                        <input
                            className="in"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </label>
                </div>
                <div className="password">
                    <label className="password">
                        Password:
                        <div className="password">
                            <input
                                className="in"
                                type={passwordVisible ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="logout-btn"
                            >
                                {passwordVisible ? "Hide" : "Show"}
                            </button>
                        </div>
                    </label>
                </div>
                <button className="logout-btn" type="submit">Login</button>
            </form>
        </motion.div>
    );
};


export default FormWithMotionAndHook;


