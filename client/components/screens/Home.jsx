import React from 'react'
import { connect } from 'react-redux'
import { setRegion } from '../../actions/region'
import { NavLink } from 'react-router-dom'

function Home (props) {
  function handleClick (evt) {
    evt.preventDefault()
    const region = evt.target.options[evt.target.selectedIndex].value
    props.dispatch(setRegion(region))
    props.history.push('/whatshappening')
  }

  return (
    <>
      <div className='flex justify-center items-center'>
        <NavLink to='/'><img className='resize rounded-md' width='300' src='/images/Logo(invisible).png' /></NavLink>
      </div>
      <div className='lg:text-7xl md:text-5xl sm:text-3xl flex items-center justify-center py-40 -mt-28 font-sans font-bold text-blue-400 container mx-auto'><h1 className='pr-8'>I Live in ... </h1>
        <select className="border border-gray-300 rounded-full py-2 px-4 text-gray-600 text-4xl bg-white hover:border-gray-400 focus:outline-none appearance-none" name='location' onChange={handleClick}>
          <option>Choose your location</option>
          <option value='Auckland'>Auckland</option>
          <option value='Wellington'>Wellington</option>
          <option value='Christchurch'>Christchurch</option>
          <option value='Dunedin'>Dunedin</option>
        </select>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    region: state.region
  }
}

export default connect(mapStateToProps)(Home)
