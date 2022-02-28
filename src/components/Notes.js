import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export const Notes = ({ notes, onRemove }) => {
  return (
    <TransitionGroup className="list-group" component="ul">
      {notes.map((note) => (
        <CSSTransition key={note.id} classNames={"note"} timeout={300}>
          <li className="list-group-item note">
            <div className="note-text">
              <strong>{note.title}</strong>
            </div>
            <div>
              <small>{note.date}</small>
              <button
                type="button"
                className="btn btn-outline-danger btn-sm"
                onClick={() => onRemove(note.id)}
              >
                &times;
              </button>
            </div>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
