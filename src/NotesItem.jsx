import React from "react";
import NotesItemBody from "./NotesItemBody";


function NotesItem ({title, createdAt, body, id, onDelete}) {
    return (
        <div className="m-10 md:m-15">
            <NotesItemBody title={title} createdAt={createdAt} body={body} id={id} onDelete={onDelete} />
        </div> 
    )
}

export default NotesItem;