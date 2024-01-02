import React from "react";
import NotesItem from "./NotesItem";

function NotesList({ notes, onDelete }) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {notes.length > 0 ? (
          
          notes.map((note) => (
            <NotesItem className="gap-4" key={note.id} id={note.id} onDelete={onDelete} {...note} />
          ))
        ) : (
          
          <div className="flex  font-extralight text-3xl text-gray-500  my-32  ">

              <p className="px-auto">Tidak ada catatan</p>
          </div>
        )}
      </div>
    );
  }
export default NotesList;
