import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const firebase = useContext(FirebaseContext);
  const alert = useContext(AlertContext);

  const submitHanlder = (event) => {
    event.preventDefault();

    if (value.trim()) {
      firebase.addNote(value.trim()).catch(() => {
        alert.show("Что-то пошло не так", "danger");
      });
      setValue("");
    } else {
      alert.show("Введите текст заметки, пожалуйста!");
    }
  };

  return (
    <form onSubmit={submitHanlder}>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Введите название заметки"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="btn btn-outline-secondary"
          type="submit"
          id="button-addon2"
        >
          Добавить
        </button>
      </div>
    </form>
  );
};
