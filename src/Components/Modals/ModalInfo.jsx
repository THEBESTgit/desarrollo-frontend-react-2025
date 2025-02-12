import { motion } from "motion/react";

// eslint-disable-next-line react/prop-types
const ModalInfo = ({ visible, message, onClose, onConfirmLogout }) => {
    if (!visible) {
        return null;
    }

    const getModalStyle = () => {
        if (message === "¡Formulario enviado y datos guardados!") {
            return "notification-success"; // Color verde
        } else if (message === "Error: Password incorrecto.") {
            return "notification-error"; // Color rojo o cualquier color que desees
        }
        return "notification-modal"; // Color por defecto (si es necesario)
    };

    return (
        <div className="modal-overlay">
            <motion.div
                className={getModalStyle()}
                initial={{opacity: 0, y: -20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.5}}
            >
                <button
                    className="close-btn"
                    onClick={onClose}>
                    X
                </button>
                <div>
                    <p>{message}</p>
                </div>
                
                {message === "¿Estás seguro de que quieres salir?" && ( 
                    <button
                        className="logout-btn"
                        onClick={onConfirmLogout}> {/* Confirmar logout */}
                        ¡Presiona para salir!
                    </button>
                )}
            </motion.div>
        </div>
    );
};

export default ModalInfo;
