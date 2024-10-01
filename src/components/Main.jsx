import React from 'react'
import CardItem from './CardItem'

export default function Main({datas}) {
  return (
    <div style={{flex:3,paddingTop:100,paddingLeft:30,paddingRight:30,display:"flex",gap:50,flexWrap:"wrap"}}>
        {datas.map((carditem)=>{return <CardItem key={carditem.id} image={carditem.image} nom={carditem.nom}/> })}
    </div>
  )
}
