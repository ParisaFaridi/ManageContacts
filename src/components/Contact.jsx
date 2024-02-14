import React from 'react'

function Contact(props) {
    
  return (

    <div className="container-fluid text-center">
    <div className="row border rounded m-3 p-3">
      <div className="col">{props.value.name}</div>
      <div className="col">{props.value.lastName}</div>
      <div className="col">📪{props.value.email}</div>
      <div className="col">☎{props.value.phone}</div>
      <button className="col" onClick={()=>{props.deleteHandler(props.value.id)
      }}>🗑</button>
    </div>
  </div>
  )
}

export default Contact