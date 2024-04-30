import React from 'react'
import { Interests } from './Interests'

const StudentInterest = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns:"1fr 1fr" }}>
    {Interests.map((Interest) =>{
      <div key={Interest.id}>
        <img src={Interest.img} alt="" />
        <h4>{Interest.title}</h4>
        <small>{Interest.desc}</small>
        <h6>{Interest.subtitle}</h6>
      </div>
    })}
  </div>
  )
}

export default StudentInterest