import React, { useState, useEffect } from "react";
import './App.css';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ListHome from "./components/ListHome";
import Modal from "./components/Modal";
import Search from "./components/Search";
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

  const [search, setSearch] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);


  function getStorage() {
      return JSON.parse(localStorage.getItem('list'));
  }

  function updateStorage(newList){
      localStorage.setItem('list', newList);
  }


  useEffect(() => {
    setFilteredNotes(
      notes.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, notes]);


  const showModal = (title, content, image, price) => {
    document.getElementsByClassName("info")[0].classList.remove("hide");
    document.querySelector('body').classList.add('no-scroll');
    document.querySelectorAll('.super-title')[0].innerHTML = title;
    document.querySelectorAll('.super-desc')[0].innerHTML = content;
    const totalImages = document.querySelectorAll('.super-cover').length;
    for(let i = 0; i < totalImages; i++){
      document.querySelectorAll('.super-cover')[i].src = image;
    }
    document.querySelectorAll('.super-price')[0].innerHTML = price;
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  const scrollingEvent = () => {
    const myNav = document.getElementById('nav-home');
    const searchContainer = document.getElementsByClassName('search-container')[0];
    const body = document.getElementsByTagName("body")[0];
    const topDistance = 400;
    window.onscroll = function () { 
        // "use strict";
        if (document.body.scrollTop >= topDistance || document.documentElement.scrollTop >= topDistance ) {
            myNav.classList.add("stiky-nav");
            searchContainer.classList.add('stiky-search');
            body.classList.add('fixed-nav');
        } 
        else {
            myNav.classList.remove("stiky-nav");
            searchContainer.classList.remove('stiky-search');
            body.classList.remove('fixed-nav');
        }
    };
  }


  scrollingEvent();
    
return (
  <div className="App pb-5 home">
    <Header/>
    <Search searchFunc={(e) => setSearch(e.target.value)} />
    <Hero />
    {/* Notes list */}
    <div className="container mt-3">
      <div className="col-12 row m-0 p-0">
        <h1 className="secound-title">Homes in <span className="air-title">your city</span></h1>
        <hr id="divisor"/>
        {filteredNotes.map((noteItem, index) => {
          return (
            <ListHome
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              image={noteItem.image}
              price={noteItem.price}
              showModal={showModal}
            />
          );
        })}
      </div>
    </div>
    {/* Notes list */}
    <Footer />
    <Modal />
  </div>
  );
}