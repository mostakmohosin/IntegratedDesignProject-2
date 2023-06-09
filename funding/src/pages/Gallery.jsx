import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { AllList } from "../helpers/AllList";
import MenuItem from "../components/GalleryItem";
import "../styles/Gallery.css";
export default function Gallery() {
  return (
    <div>
      <Navbar />
      <div id="about-home">
        <h2>Gallery/</h2>
      </div>

      <div className="menu">
        <h1 className="menuTitle">Our initiative</h1>
        <div className="menuList">
          {AllList.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                price={menuItem.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  )
}
