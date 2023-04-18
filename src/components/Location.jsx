import React from 'react'

const Location = ({location}) => {
  return (
    <section className=' text-white p-4'>
    <h2 className='flex justify-center'>Name: {location?.name}</h2>
    <ul className='flex justify-center'>
        <li className='p-2'>Type: {location?.type}</li>
        <li className='p-2'>Dimension: {location?.dimension}</li>
        <li className='p-2'>Population: {location?.residents.length}</li>
    </ul>
    </section>
  )
}

export default Location 