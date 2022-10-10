import React from 'react'
import { data } from '../../assests/data'
import "./Main.css"
import Card from "./Card"


const Main = () => {
  return (
    <div className='card-container'>
      {data.map((item)=> <Card{...item}/>)}

    </div>
  )
}

export default Main