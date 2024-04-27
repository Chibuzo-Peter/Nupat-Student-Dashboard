const Cards = ({Children}) => {
  return (
    <div style={{width: "40vw", height:"50vh", borderRadius:"20px", boxShadow:"0 0 5px rgba(0,0,0,0.5)", background:"red"}}>
        {Children}
    </div>
  )
}

export default Cards