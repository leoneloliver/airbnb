import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ListHome from "./components/ListHome";
import data from "./notes";

export default function Homepage() {
  
    // extra
    let listItem = data;
    const storageTodos = getStorage();
    if(storageTodos===null){
        updateStorage(JSON.stringify(listItem));
    }else{
        listItem = getStorage();
    } 
    //etra

    const [notes] = useState(listItem);

    useEffect(() => {
        updateStorage(JSON.stringify(notes));
    },[notes]);

    function getStorage() {
        return JSON.parse(localStorage.getItem('list'));
    }

    function updateStorage(newList){
        localStorage.setItem('list', newList);
    }

return (
  <div className="App pb-5 home">
    <Header />
    
    <Hero />
    {/* Notes list */}
    <div className="container mt-3">
      <div className="col-12 row m-0 p-0">
        <hr />
        {notes.map((noteItem, index) => {
          return (
            <ListHome
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              image={noteItem.image}
              price={noteItem.price}
             
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