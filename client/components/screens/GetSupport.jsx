import React from 'react'
import PageLinks from '../PageLinks'
import Footer from '../Footer'

function GetSupport () {
  return (
    <div>
      <PageLinks/>

      <div className='flex flex-col sm:flex-row mt-24'>
        <div className='sm:w-1/3'>
          <div className='bg-white p-8 border-b-4 border-blue-500 rounded-lg flex flex-col items-center sm:mx-2'>
            <div className='bg-gray-200 text-blue-500 w-18 rounded-full p-2'>
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" /></svg>
            </div>
            <div className='text-center font-bold mt-2'>Find Out More About Language Schools In Your Region</div>
          </div>
        </div>

        <div className='sm:w-1/3'>
          <div className='bg-white p-8 border-b-4 border-blue-500 rounded-lg flex flex-col items-center sm:mx-2'>
            <div className='bg-gray-200 text-blue-500 w-18 rounded-full p-2'>
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <div className='text-center font-bold mt-2'>Find Out More About Organizations In Your Region</div>
          </div>
        </div>

        <div className='sm:w-1/3'>
          <div className='bg-white p-8 border-b-4 border-blue-500 rounded-lg flex flex-col items-center sm:mx-2'>
            <div className='bg-gray-200 text-blue-500 w-18 rounded-full p-2'>
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
            </div>
            <div className='text-center font-bold mt-2'>Find Out More About Emergency Contacts In Your Region</div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}

export default GetSupport
