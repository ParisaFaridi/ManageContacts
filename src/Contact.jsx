import React from 'react'

function Contact(props) {
    const deleteHandler=()=>{
        props.onDelete()
    }
  return (

    <div class="container-fluid text-center">
    <div class="row border rounded m-3 p-3">
      <div class="col">{props.value.name}</div>
      <div class="col">{props.value.lastName}</div>
      <div class="col">📪{props.value.email}</div>
      <div class="col">☎{props.value.phone}</div>
      <div class="col" onClick={deleteHandler}>🗑</div>
    </div>
  </div>
  )
}

export default Contact