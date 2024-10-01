import React from 'react'

export default function CardItem({image,nom}) {
  return (
    <div style={{width:250,height:300,marginBottom:5}}>
       <img src={image} alt="" style={{width:250,height:250}} />
       {nom}
    </div>
  )
}
