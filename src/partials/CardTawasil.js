import React from 'react'
import profile from '../img/tawasil.png'

import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';


function CardTawasil() {

  return (
    <div className="w-full">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-xl rounded-xl p-5">
        <div className="">
          <img className="w-32 mx-auto shadow-xl rounded-full" src={profile} alt="Profile face" />
        </div>
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
          Abukhair Tawasil
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            BSIT 4A
          </p>
          <div className="flex align-center justify-center mt-4">
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300" href="https://www.facebook.com/sahijuan">
              <FaFacebook />
              <span class="sr-only">Facebook</span>
            </a>
            <a className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300" href="https://twitter.com/userpsw">
              <FaTwitter />
              <span class="sr-only">Twitter</span>  
            </a>
          
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardTawasil
