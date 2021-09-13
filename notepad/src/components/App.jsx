import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import './App.css';


function App() {
    const [notes, setNotes] = useState([])
    function addNote(newNote){
          setNotes(prev =>{
             return [...prev, newNote]
          })
    }
    function deleteNote(id){
      console.log("id",id);
      console.log("thisi is notes:",notes)
      setNotes(notes.filter((data,index)=>{
        return index !== id
      }))
        // setNotes(prev =>{
        //     prev.filter((noteItem, index)=>{
        //       console.log("index111",index);
        //         return index !== id;
        //       })
        //       console.log("previous value",prev);
        // })
    }
    console.log("sfhdgfhgjhk")

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>
      {notes?.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
