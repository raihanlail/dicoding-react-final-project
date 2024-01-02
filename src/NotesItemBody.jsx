import React from "react";
import DeleteButton from "./DeleteButton";

function NotesItemBody ({title, createdAt, body, id, onDelete }) {
    return (
        <div className="bg-slate-200 rounded-md p-4">
            <div className=" flex flex-row justify-between  ">
                <div className="flex flex-col  ">

            <h3 className="font-bold"> {title}</h3>
            <p className=" text-xs">{createdAt}</p>
                </div>
                <div className="flex ">

                <DeleteButton id={id} onDelete={onDelete } />
                </div>


            </div>
            <p className="pt-4 w-full text-sm font-semibold">{body}</p>
           
        </div>
    );
}

export default NotesItemBody;