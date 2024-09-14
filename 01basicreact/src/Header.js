import React from 'react'
import './style.css'

function Header() {

    const mystyle = {
        color:'white',
        padding: '0px',
        margin: '0px',
        marginTop:'10px',
        fontFamily: 'timesnewroman',
        textAlign: 'center',
    }
  return (
    <div>
        <h1 style = {mystyle}>Hi, my name is Amit yadav</h1>
        <h2 style = {mystyle}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad totam libero</h2>
        <h3 style = {mystyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde corrupti ea cupiditate quo voluptatem hic repudiandae</h3>
        <h4></h4>
        <img src='images/image.png' alt="utf"/>
    </div>
  )
}

export default Header