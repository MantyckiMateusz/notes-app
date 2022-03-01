import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";


function App() {

  const [notes, setNotes] = useState([]);

  const addNote = note => {
    setNotes( prev => [...prev, note ] );
  }

  const deleteNote = (id) => {
    setNotes( notes.filter( (note, index) => index !== id ));
  }

  return (
    <div>
      <Header />
      <CreateArea  add = {addNote} />
      {notes.map( (note, index) => {
        return <Note key={index} id = {index} title={note.title} content={note.content} delete = {deleteNote} />;
      })}
      <Footer />
    </div>
  );
}

export default App;
