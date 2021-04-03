import React from 'react'

import { FcAssistant } from 'react-icons/fc';
import { FaReact } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';

function Skills() {
  return (
    <div>
      <p className="m-6 text-2xl md:text-4xl font-bold text-center ">
        Skills
      </p>
    <div className="flex flex-col sm:flex-row align-center justify-center max-w-2xl mx-auto mt-8">
      
    <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
      <FaJava className="text-4xl mx-auto inline-block" />
      <p className="text-xl font-semibold mt-4">
        Java
      </p>
    </div>
      <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
        <FcAssistant className="text-4xl mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          Virtual Assistant
        </p>
      </div>
      <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
        <FaReact className="text-4xl mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          ReactJS
        </p>
      </div>
    </div>
    </div>
  )
}

export default Skills
