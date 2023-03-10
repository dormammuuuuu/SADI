import React from 'react'
import { NavLink } from 'react-router-dom'
import Cookies from 'js-cookie'
import { IoVideocam, IoHelpCircle, IoLogOut } from 'react-icons/io5'
import { MdSpaceDashboard } from 'react-icons/md'
import { FaUser } from 'react-icons/fa'

const sidebar = () => {
   const handleLogout = () => {
      Cookies.remove('token');
      window.location.href = '/login';
   }

   return (
      <aside className="w-64 h-screen bg-gray-50 fixed top-0 left-0" aria-label="Sidebar">
         <div className="px-3 py-4 overflow-y-auto h-full flex flex-col justify-between">
            <div>
               <ul className="space-y-2">
                  <li>
                     <NavLink
                        to="/"
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                        <MdSpaceDashboard className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />

                        <span className="ml-3">Dashboard</span>
                     </NavLink>
                  </li>
                  <li>
                     <NavLink to="/video-stream"
                        className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100">
                        <IoVideocam className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                        <span className="ml-3">VideoStream</span>
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to="/user"
                        className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100">
                        <FaUser className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                        <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                     </NavLink>
                  </li>

               </ul>

               <ul className="pt-4 mt-4 space-y-2 border-t border-gray-200">
                  <li>
                     <NavLink to="/help"
                        className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100">
                        <IoHelpCircle className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                        <span className="ml-3">Help</span>
                     </NavLink>
                  </li>

                  <li>
                     <NavLink to="/documentation"
                        className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100">
                        <svg aria-hidden="true"
                           className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                           fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                           <path fillRule="evenodd"
                              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                              clipRule="evenodd"></path>
                        </svg>
                        <span className="ml-3">Documentation</span>
                     </NavLink>
                  </li>

                  <li>
                     <NavLink to="/test"
                        className="flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100">
                        <svg aria-hidden="true"
                           className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                           fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                           <path fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C15.802 8.249 16 9.1 16 10zm-5.165 3.913l1.58 1.58A5.98 5.98 0 0110 16a5.976 5.976 0 01-2.516-.552l1.562-1.562a4.006 4.006 0 001.789.027zm-4.677-2.796a4.002 4.002 0 01-.041-2.08l-.08.08-1.53-1.533A5.98 5.98 0 004 10c0 .954.223 1.856.619 2.657l1.54-1.54zm1.088-6.45A5.974 5.974 0 0110 4c.954 0 1.856.223 2.657.619l-1.54 1.54a4.002 4.002 0 00-2.346.033L7.246 4.668zM12 10a2 2 0 11-4 0 2 2 0 014 0z"
                              clipRule="evenodd"></path>
                        </svg>
                        <span className="ml-3">Test</span>
                     </NavLink>
                  </li>

               </ul>
            </div>
            <div>
               <button onClick={handleLogout}
                  className="w-full flex items-center p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100">
                  <IoLogOut className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900" />
                  <span className="ml-3">Log out</span>
               </button>
            </div>
         </div>
      </aside>
   )
}

export default sidebar