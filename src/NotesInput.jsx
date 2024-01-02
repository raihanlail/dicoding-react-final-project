import React from "react";
import { showFormattedDate } from "./data";


class NotesInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            
            title: '',
            body: '',
            
           
        


        }
        this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
       
        this.onContentChangeHandler = this.onContentChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onTitleChangeHandler(event) {
        this.setState(() => {
            return{
                title: event.target.value,
            }
        });
    }
    

    onContentChangeHandler(event) {
        this.setState(() => {
            return{
                body: event.target.value,
            }
        });
    }

    onSubmitHandler(event) {
        event.preventDefault();
        const currentDate = new Date(); 
        const newNote = { ...this.state, createdAt: showFormattedDate(currentDate) }
    this.props.addNote(newNote);
        console.log(newNote)
    }

    render() {
        return(

<form className="max-w-sm mx-auto" onSubmit={this.onSubmitHandler}>
  <div className="mb-5">
      <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900" maxLength="10" >Title</label>
      <input type="text" id="base-input"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={this.state.title} onChange={this.onTitleChangeHandler} />
  </div>
  <div className="hidden">
      <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900">Date</label>
      <input disabled type="text" id="small-input"className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" value={this.state.date} onChange={this.onDateChangeHandler}  />
  </div>
  <div className="mb-5">
      <label htmlFor="large-input" className="block mb-2 text-sm font-medium text-gray-900">Content</label>
      <input type="text" id="large-input"  className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 " value={this.state.body} onChange={this.onContentChangeHandler} />
  </div>
  <button type="submit" className="text-white bg-slate-400 hover:bg-slate-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>

</form>
        )
        

    }


}

export default NotesInput;