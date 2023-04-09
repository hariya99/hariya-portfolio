import React from 'react'
import {GetSkills} from '../Utils'


const Skills = () => {

    const skills = GetSkills()

  return (
    <div name="Skills" className=' h-screen w-full bg-black'>

        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-white '>
            <div>
                <p className=' text-4xl border-b-4 border-gray-500 p-2 inline text-center'>Skills</p>
                <p className='py-6'>These are the technologies I've worked with ! </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 
            gap-8 text-center py-8 px-12 sm:px-0'>

            {
                skills.map(({id, tech, title,style})=>(
                    <div key= {id} className={`shadow-md hover:scale-105 duration-500 py-2
                    rounded-lg ${style}`}>
                        <img src={tech} alt="" className='w-16 h-16 mx-auto'></img>
                        <p className='mt-4'>{title}</p>
                    </div>
                    
                ))
            }

            
        </div>
        </div>

        


    </div>
  )
}

export default Skills