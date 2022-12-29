import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router";
import './Media.css';
import Api from '../api/Api';


function Media() {
  const navgate=useNavigate()
  function trend(){
      navgate("/trending")
  }
  return (

    <div className="media">
      <div className="row">
        <div className="row-header">
          <img src='images/trending.svg' alt='Tending'/>
          
          <h1>Trending</h1>
          <p className="get" onClick={trend}>Get all GIFS</p>
        </div>        
        <div className='trending-container'>
            <Api/>
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src='images/artists.svg' alt='Artists'/>
          <h1>Artists</h1>
        </div>
        <div className='artists-container'>
            <h2>content</h2>
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src='images/clips.svg' alt='Clips'/>
          <h1>Clips</h1>
        </div>
        <div className='clips-container'>
            <h2>content</h2>
        </div>
      </div>
      <div className="row">
        <div className="row-header">
          <img src='images/stories.svg' alt='Stories'/>
          <h1>Stories</h1>
        </div>
        <div className='stories-container'>
            <h2>content</h2>
        </div>
      </div>
    </div>
  );
}

export default Media;
