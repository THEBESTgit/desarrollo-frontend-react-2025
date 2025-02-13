import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { clearFormData } from "../../store/features/form/formslice.jsx";
import { useState } from "react";  // Importa useState para manejar el modal

import ModalInfo from "../../Components/Modals/ModalInfo.jsx";  // Asegúrate de importar ModalInfo

const Navigator = () => {
  const { username, email } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  
  const [showLogoutModal, setShowLogoutModal] = useState(false);  // Estado para el modal

  // Función para mostrar el modal
  const handleLogout = () => {
      setShowLogoutModal(true);  // Solo muestra el modal, no borra los datos aún
  };

  // Función para confirmar el logout y borrar los datos
  const confirmLogout = () => {
      // Despacha la acción para limpiar los datos del usuario
      dispatch(clearFormData());

      // Cierra el modal
      setShowLogoutModal(false);
  };

  const closeLogoutModal = () => {
      setShowLogoutModal(false);  // Cierra el modal sin hacer logout
  };

  return (
      <nav className="navbar">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/counter" className="nav-link">Counter</Link>
          <Link to="/think" className="nav-link">Think</Link>
          <Link to="/products" className="nav-link">Product</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/dictionary" className="nav-link">Dictionary</Link>

          {/* Solo muestra la información del usuario y el botón de logout si está logueado */}
          {username || email ? (
              <div className="nav-user-info">
                  <span>{username || "No User"} | {email || "No Email"}</span>
                  <button className="logout-btn" onClick={handleLogout}>Logout</button>
              </div>
          ) : (
              <div className="nav-user-info">
                  <span>No user logged in</span>
              </div>
          )}

          {/* Modal de Logout */}
          <ModalInfo 
              visible={showLogoutModal}
              message="¿Estás seguro de que quieres salir?"
              onClose={closeLogoutModal} 
              onConfirmLogout={confirmLogout}  // Pasa la función para confirmar logout
              modalStyle="logout-modal"  // Puedes pasar un estilo diferente si lo deseas
          />
      </nav>
  );
};

export default Navigator;
