import React from 'react'
import TmnUseState from './components/TmnUseState'
import TmnUseEffect from './components/TmnUseEffect'
import TmnUseContext from './component/TmnuseContext'
import './App.css'

export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Tran Minh Nam - Hook</h1>
      <hr/>
      <TmnUseState/>
      <hr/> 
      <TmnUseEffect/>
      <hr/>
      <TmnUseContext/>
    </div>
  )
}
