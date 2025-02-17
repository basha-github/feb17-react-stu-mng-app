import React from 'react'
import AddStudent from './components/AddStudent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DisplayAll from './components/DisplayAll'
import SearchStudent from './components/SearchStudent'
import DeleteStudent from './components/DeleteStudent'

export default function App() {
  return (
    <div>

<BrowserRouter>

<Routes>
<Route path='/' element={<DisplayAll />} />
<Route path='/add' element={<AddStudent />} />
<Route path='/search' element={<SearchStudent />} />
<Route path='/delete' element={<DeleteStudent />} />

</Routes>

</BrowserRouter>


    </div>
  )
}
