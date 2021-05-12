import React from 'react'

import PageLinks from '../PageLinks'
import Footer from '../Footer'

function GetSupport () {
  return (
    <div>
      <PageLinks currentPage="support"/>
      <div className='flex justify-center items-center flex-col-reverse lg:flex-row-reverse lg: justify-around mt-16'>
        <img className='w-screen lg:max-w-xl' src="./images/Logo(invisible).png" alt="Comm(unity) logo" />
        <div className='mt-12 text-center lg:text-left'>
          <h2 className='font-sans text-4xl'>New Place. New Experience.</h2>
          <p className='font-bold mt-5'>Join <em>the</em> Community.</p>
          <button className='inline-block bg-blue-400 px-10 py-5 rounded-full shadow-lg uppercase text-lg tracking-wide mt-5'><a href="http://rc.org.nz/" target="_blank" >Get Support</a></button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GetSupport
