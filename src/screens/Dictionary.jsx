import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalInfo from "../Components/Modals/ModalInfo"; // Asegúrate de que la ruta sea correcta
import { addWord, removeWord } from "../store/features/dictionary/dictionarySlice";

const Dictionary = () => {
  const [modalType, setModalType] = useState(null);
  const [word, setWord] = useState({ es: "", en: "", pt: "" });
  const [searchWord, setSearchWord] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("es"); // Estado para el idioma seleccionado
  const [translatedWord, setTranslatedWord] = useState(""); // Estado para mostrar la traducción

  const dispatch = useDispatch();
  const dictionary = useSelector((state) => state.dictionary.words);

  const handleAddWord = () => {
    dispatch(addWord(word));
    setModalType(null);
    setWord({ es: "", en: "", pt: "" });
  };

  const handleRemoveWord = () => {
    dispatch(removeWord(searchWord));
    setModalType(null);
    setSearchWord("");
  };

  const handleTranslate = () => {
    // Buscar la palabra en cualquier idioma
    const foundWord = dictionary.find(
      (entry) => entry.es === searchWord || entry.en === searchWord || entry.pt === searchWord
    );

    if (foundWord) {
      setTranslatedWord(foundWord[selectedLanguage] || "No disponible");
    } else {
      setTranslatedWord("Palabra no encontrada");
    }
  };

  return (
    <div className="dictionary-container">
      <h1>Diccionario Multilingüe</h1>
      <p>Este Modulo diccionario corresponde al Recuperatorio del</p>
      <p>modulo 7 ReactJS. URL: https://thebestgit.github.io/desarrollo-frontend-react-2025/</p>
      <button onClick={() => setModalType("add")}>Agregar Palabra</button>
      <button onClick={() => setModalType("remove")}>Eliminar Palabra</button>
      <button onClick={() => setModalType("translate")}>Traducir</button>

      {modalType === "add" && (
  <ModalInfo visible={true} onClose={() => setModalType(null)}>
    <h2 className="modal-title">Traductor USIP</h2>
    
    <div className="modal-form-group">
      <label className="modal-label">Español:</label>
      <input
        type="text"
        className="modal-input"
        placeholder="Palabra en Español"
        value={word.es}
        onChange={(e) => setWord({ ...word, es: e.target.value })}
      />
    </div>
    <div className="modal-form-group">
      <label className="modal-label">Inglés:</label>
      <input
        type="text"
        className="modal-input"
        placeholder="Word in English"
        value={word.en}
        onChange={(e) => setWord({ ...word, en: e.target.value })}
      />
    </div>
    <div className="modal-form-group">
      <label className="modal-label">Portugués:</label>
      <input
        type="text"
        className="modal-input"
        placeholder="Palavra em Português"
        value={word.pt}
        onChange={(e) => setWord({ ...word, pt: e.target.value })}
      />
    </div>
    <button className="modal-button" onClick={handleAddWord}>Agregar</button>
  </ModalInfo>
)}

{modalType === "remove" && (
  <ModalInfo visible={true} onClose={() => setModalType(null)}>
    <h2 className="modal-title">Traductor USIP</h2>
    <p className="modal-subtitle">¿Qué palabra desea eliminar del diccionario?</p>
    <p>Puede escribir su palabra en español, inglés o portugués.</p>
    <div className="modal-form-group">
      <label className="modal-label">Palabra:</label>
      <input
        type="text"
        className="modal-input"
        placeholder="Palabra a eliminar"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
    </div>
    <button className="modal-button" onClick={handleRemoveWord}>Eliminar</button>
  </ModalInfo>
)}

{modalType === "translate" && (
  <ModalInfo visible={true} onClose={() => setModalType(null)}>
    <h2 className="modal-title">Traductor USIP</h2>
    <p>¿Qué palabra desea traducir en el diccionario?</p>
    <p>Agrege su palabra y despues el idioma de traduccion</p>
    <div className="modal-form-group">
      <label className="modal-label">Palabra a traducir:</label>
      <input
        type="text"
        className="modal-input"
        placeholder="Palabra en cualquier idioma"
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
      />
    </div>
    <div className="modal-form-group">
      <label className="modal-label">Idioma a traducir:</label>
      <select
        className="modal-select"
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        <option value="es">Español</option>
        <option value="en">Inglés</option>
        <option value="pt">Portugués</option>
      </select>
    </div>
    <div className="modal-form-group">
      <label className="modal-label">Traducción:</label>
      <textarea
        className="modal-textarea"
        readOnly
        value={translatedWord}
      ></textarea>
    </div>
    <button className="modal-button" onClick={handleTranslate}>Traducir</button>
  </ModalInfo>
)}

    </div>
  );
};

export default Dictionary;
