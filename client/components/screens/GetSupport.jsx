import React from 'react'
import PageLinks from '../PageLinks'
import Footer from '../Footer'

function GetSupport () {
  return (
    <div>
      <PageLinks/>
      <div className='flex justify-center items-center flex-col-reverse'>
        <img width="400" src="./images/Logo(invisible).png" alt="Comm(unity) logo" />
        <div className='mt-12'>
          <h2 className='font-sans text-4xl'>New Place. New Experience.</h2>
          <p className='font-bold mt-5'>Join <em>the</em> Community.</p>
          <button className='inline-block bg-blue-400 px-10 py-5 rounded-full shadow-lg uppercase text-lg tracking-wide mt-5'>Get Support</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GetSupport
