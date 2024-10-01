import React from 'react'
import Header from '../components/Header'
import SideBar from '../components/SideBar'
import Main from '../components/Main'
import { datas } from '../mock/mock'
export default function HomePage() {
  return (
    <div>
         <Header/>
         <div style={{display:"flex",margin:0}}>
         <SideBar/>
         <Main datas={datas}/>
         </div>
         
    </div>
  )
}
