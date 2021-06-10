import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import Note from "./components/Note";
import ErrorTemplate from "./components/ErrorTemplate";
import data from "./notes";

export default function App() {
  
  // extra
  let listItem = data;
  const storageTodos = getStorage();
  if(storageTodos===null){
    updateStorage(JSON.stringify(listItem));
  }else{
    listItem = getStorage();
  } 
  //etra

  const [alert, setAlert] = useState(null);
  const [notes, setNotes] = useState(listItem);

  // useEffect(() => {
  //   let listItem = data;
  //   const storageTodos = getStorage();
  //   if(storageTodos===null){
  //     updateStorage(JSON.stringify(listItem));
  //   }else{
  //     listItem = getStorage();
  //   } 
  //   setNotes(listItem);
  // },[]);

  useEffect(() => {
    updateStorage(JSON.stringify(notes));
  },[notes]);

  function addNote(newNote) {

  if (newNote.title !== "" && newNote.content !== "" && newNote.image !== "") {
    setNotes((prevNotes) => {
      // return [...prevNotes, newNote];
      return [newNote, ...prevNotes];
    });
    setAlert(null);
  }else{
    showAlert();
  }
}
function deleteNote(id) {
  setNotes((prevNotes) => {
    return prevNotes.filter((noteItem, index) => {
      return index !== id;
    });
  });
}

function getStorage() {
  return JSON.parse(localStorage.getItem('list'));
}

function updateStorage(newList){
  localStorage.setItem('list', newList);
}

function showAlert() {  
  setAlert(true);
  setTimeout(() => setAlert(null),3000);
}

return (
  <div className="App pb-5">
    <Header />
    <div className="container">
      <CreateArea onAdd={addNote} />
      {alert !== null && (
          <ErrorTemplate />        
      )}
    </div>
    {/* Notes list */}
    <div className="container mt-3">
      <div className="col-12 row m-0 p-0">
        <hr />
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              image={noteItem.image}
              price={noteItem.price}
              onDelete={deleteNote}
            />
          );
        })}
      </div>
    </div>
    {/* Notes list */}
    <Footer />
  </div>
  );
}