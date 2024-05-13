import React from 'react'

const CourseCard = ({children}) => {
  return (
    <div style={{height:"30vh", width:"30vw", borderRadius:"10px", backgroundColor:"#fff", padding:"10px", margin:"10px", boxShadow:"0 0 5px rgba(0, 0, 0, 0.5)"}}>{children}</div>
  )
}

export default CourseCard