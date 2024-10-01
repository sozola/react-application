import React from 'react'
import plante from "../images/download.png"
export default function Header() {
  return (
    <div style={{display:"flex",justifyContent:"flex-end",marginTop:70,marginRight:30,borderBottom:"3px solid #000",paddingBottom:30}} >
        <img src={plante} alt="" style={{width:"30px",marginRight:"30px"}} />
        <h2>La maison de jungle</h2>
    </div>
  )
}
