import React from 'react'
// import Ether from '../assets/portfolio/Ethereum.jpeg'
// import Residual from '../assets/portfolio/Residual.png'
// import re from '../assets/portfolio/react.png'
import {GetPortfolio} from '../Utils'

const Portfolio = () => {

    const {brief, portfolios} = GetPortfolio()

  return (
    <div name="Portfolio"
    className=' h-screen w-full bg-black'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center
         w-full h-full'>
            <div className=' pb-8'>
                <p className=' text-4xl inline border-b-4 text-gray-300 border-gray-500'>Portfolio</p>
                <p className='py-6'> {brief}</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 
                    px-12 sm:px-0'>
                {
                    portfolios.map(({id, image, title, url})=>(
                        <div key={id} className=' shadow-md shadow-gray-600 rounded-lg' >
                            <a href={url}>
                            <img src={image} alt="" className='  h-48 w-96 rounded-md duration-200 hover:scale-105'/>
                            </a>
                                
                            <div className='flex items-center justify-center px-6 py-2 m-2 text-gray-300'>
                                <p>{title}
                                </p>
                                {/* <button className='w-1/2 px-6 py-2 m-2 duration-200 
                                hover:scale-105'>Code</button>    */}
                            </div>     
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    
  )
}

export default Portfolio