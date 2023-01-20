import React from 'react'
import { Link, Route, Routes } from 'react-router-dom';
import { Dashboard, Documentation, UserList, Help, Test, VideoStream } from '../components'



const SadiMain = () => {
   return (
      <div className="h-full">
         <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/user' element={<UserList />} />
            <Route path='/documentation' element={<Documentation />} />
            <Route path='/help' element={<Help />} />
            <Route path='/test' element={<Test />} />
            <Route path='/video-stream' element={<VideoStream />} />
            {/* <Route path='/search' element={<Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} /> */}
         </Routes>
      </div>

   )
}

export default SadiMain