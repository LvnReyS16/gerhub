import React from 'react'

import { DiDatabase } from 'react-icons/di';
import { DiNetbeans } from 'react-icons/di';
import { FaJava } from 'react-icons/fa';

function SkillsTawasil() {
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
        <DiDatabase className="text-4xl mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          Database Management
        </p>
      </div>
      <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
        <DiNetbeans className="text-4xl mx-auto inline-block" />
        <p className="text-xl font-semibold mt-4">
          Netbeans
        </p>
      </div>
    </div>
    </div>
  )
}

export default SkillsTawasil
