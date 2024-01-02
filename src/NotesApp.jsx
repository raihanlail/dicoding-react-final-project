import React from "react";
import './index.css'
import NoteList from "./NotesList";
import NotesInput from "./NotesInput";
import Search from "./Search";
import { getInitialData } from "./data";


class NotesApp extends React.Component {

    constructor(props){
        super(props);
      this.state = {
        notes: getInitialData(),
      }
      this.onDeleteHandler = this.onDeleteHandler.bind(this);
      this.onAddNotesHandler = this.onAddNotesHandler.bind(this);

    }
    
    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
      }
    
      onAddNotesHandler({title, createdAt, body, id}) {
        this.setState((prevState) =>{
          return{notes: [
            ...prevState.notes,
            {
              id: +new Date(),
              title,
              createdAt,
              
              body,
              archived: false,
            }
          ]}
        });
      }
    render(){
        return(
            <div>
              <div className="flex flex-col md:flex-row justify-between">

                <h1 className="text-3xl ml-12 mt-10 ">Notes App</h1>
                <Search />
              </div>

                <h2 className="text-2xl mt-10 ml-12">Add Note</h2>
                <NotesInput addNote={this.onAddNotesHandler} />
                <h2 className="text-2xl mt-10 ml-12">My Notes</h2>
                <NoteList notes={this.state.notes} onDelete={this.onDeleteHandler} />
            </div>
        );
    }
}

export default NotesApp;