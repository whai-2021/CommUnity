import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PageLinks from '../PageLinks'
import { getUsersGroups, getGroups, addGroup, addUserToGroup } from '../../apis/groups'
import { IsAuthenticated, NotAuthenticated } from '../Authentication'

function WhatsHappening (props) {
  const [usersGroups, setUsersGroups] = useState('')
  const [groups, setGroups] = useState([])
  const [formVisible, setFormVisible] = useState(false)
  const [imageFile, setImageFile] = useState()

  const initialFormData = { name: '' }
  const [formData, setFormData] = useState(initialFormData)

  const fileSelected = event => {
      const file = event.target.files[0]
      setImageFile(file)
    }

  function handleChange (e) {
    e.preventDefault()
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit (e) {
    e.preventDefault()
    addGroup(formData, 1, imageFile)
      .then((newGroup) => {
        return addUserToGroup(newGroup.id, props.user)
      })
      .then(() => {
        return getGroups()
      })
      .then((groups) => {
        setGroups(groups)
        setFormData(initialFormData)
        return null
      })
      .catch(err => {
        console.log(err)
      })
  }

  function showForm () {
    return (
      <div className="p-6 bg-gray-50 shadow-lg rounded-md">
        <form className="block">
          <div className="pb-2">
            <label className="text-semibold text-xl text-gray-600">Group Name: </label>
          </div>
          <div className="pb-2">
            <input required name='name' type='text' value={formData.name} onChange={handleChange} className='border border-gray-300 w-full px-4 py-2 rounded-md'></input>
          </div>
          <div className="py-4">
            <input required onChange={fileSelected} type="file" accept="image/*"></input>
          </div>
          <div className="pt-4 flex justify-end">
            <button className='bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded' onClick={() => setFormVisible(false)}>Cancel</button>
            <button className="py-2 px-6 bg-blue-500 shadow-sm hover:bg-blue-600 text-white rounded-md ml-4" onClick={handleSubmit}>Create</button>
          </div>
        </form>
      </div>
    )
  }

  useEffect(() => {
    getUsersGroups(props.user.id)
      .then((res) => {
        setUsersGroups(res)
        return null
      })
      .catch(err => {
        console.log(err.message)
      })

    getGroups()
      .then((res) => {
        setGroups(res)
        return null
      })
      .catch(err => {
        console.log(err.message)
      })
  }, [props.user.id])

  return (
    <>
      <PageLinks />
      <div className="w-screen">
        <IsAuthenticated>
        <h1 className="w-full text-center text-4xl font-bold text-gray-600 mt-12">Whats Happening</h1>
        <div className="flex justify-center">
          <div className="w-3/4">
            {usersGroups && <div className="">
              <div className='flex justify-between py-8'>
                <h2 className=" text-2xl font-semibold text-gray-600">My Groups</h2>
                {!formVisible && <button onClick={() => setFormVisible(true)} className="py-2 px-6 bg-blue-500 shadow-sm hover:bg-blue-600 text-white rounded-md ml-4">+ Create Group</button>}
                {formVisible && showForm()}
              </div>
              <div className="grid gap-8 grid-cols-3">
                {usersGroups.map((group) => (
                  <Link key={group.id} to={`/whatshappening/${group.id}`}>
                    <div key={group.id} className="shadow-md rounded-lg">
                      <div className="w-full h-64 bg-cover bg-gray-100" style={{backgroundImage: `url(api/v1/images/group/${group.id})`}}></div>
                      <h2 className="p-4 font-semibold text-lg text-gray-500">{group.name}</h2>                    
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            }
            <div>
              <h2 className="py-8 text-2xl font-semibold text-gray-600">All Groups</h2>
              <div className="grid gap-8 grid-cols-3 pb-16">
                {groups.map((group) => (
                  <Link key={group.id} to={`/whatshappening/${group.id}`}>
                    <div key={group.id} className="shadow-md rounded-lg">
                      <div className="w-full h-64 bg-cover bg-gray-100" style={{backgroundImage: `url(api/v1/images/group/${group.id})`}}></div>
                      <h2 className="p-4 font-semibold text-lg text-gray-500">{group.name}</h2>                    
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        </IsAuthenticated>
        <NotAuthenticated>
        <h1 className="w-full text-center text-4xl font-bold text-gray-600 py-8">Oops! You are unable to see this page</h1>
        <p className="text-lg font-semibold text-center">
            Please Login or Register to continue.
        </p>
        </NotAuthenticated>
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    region: state.region,
    user: state.user,
    userGroups: state.userGroups
  }
}

export default connect(mapStateToProps)(WhatsHappening)
