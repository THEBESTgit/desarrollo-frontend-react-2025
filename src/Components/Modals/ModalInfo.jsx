import { motion } from "framer-motion"; // ⚠️ Asegúrate de importar desde "framer-motion"

// eslint-disable-next-line react/prop-types
const ModalInfo = ({ visible, message, onClose, onConfirmLogout, children }) => {
    if (!visible) {
        return null;
    }

    const getModalStyle = () => {
        if (message === "¡Formulario enviado y datos guardados!") {
            return "notification-success"; // Color verde
        } else if (message === "Error: Password incorrecto.") {
            return "notification-error"; // Color rojo
        }
        return "notification-modal"; // Estilo por defecto
    };

    return (
        <div className="modal-overlay">
            <motion.div
                className={getModalStyle()}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <button className="close-btn" onClick={onClose}>X</button>
                
                {/* Renderizar el mensaje si existe */}
                {message && <p>{message}</p>}
                
                {/* Renderizar contenido dinámico (inputs, botones, etc.) */}
                {children}

                {/* Botón de logout si es necesario */}
                {message === "¿Estás seguro de que quieres salir?" && (
                    <button className="logout-btn" onClick={onConfirmLogout}>
                        ¡Presiona para salir!
                    </button>
                )}
            </motion.div>
        </div>
    );
};

export default ModalInfo;
