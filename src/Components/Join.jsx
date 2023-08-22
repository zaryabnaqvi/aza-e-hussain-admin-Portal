import React, { useState, useEffect } from 'react'
import JoinItem from './JoinItem'
import Loader from './Loader'

export default function Join() {


  const [members, SetMembers] = useState([])
  const [loading, setLoading] = useState(false)
  const getMembers = async () => {
    setLoading(true)
    const req = await fetch('https://gold-adventurous-perch.cyclic.cloud/api/join/getJoin')
    const json = await req.json();
    setLoading(false)
    SetMembers(json)
    console.log(json)

  }

  useEffect(() => {
    getMembers();
  }, [])



  const auth = localStorage.getItem('auth-token')
  return (
    <>
      {auth && auth !== '64db59e325c7945c4ee3d2ff' && (
        <h1 className='text center mt-5 pt-5'>
          <i class="fa-solid fa-lock fa-beat me-3"></i> NO ACCESS KINDLY LOGIN TO MANAGE PAGES
        </h1>
      )

      }

      {!auth && (
        <h1 className='text center mt-5 pt-5'>
          <i class="fa-solid fa-lock fa-beat me-3"></i> NO ACCESS KINDLY LOGIN TO MANAGE PAGES
        </h1>
      )

      }


      {auth && auth === '64db59e325c7945c4ee3d2ff' && (<>




        <div className='container mt-5 pt-3'>
          <h1>Team Members Who haved Filled the Form</h1>
          {!loading && members.length !== 0 && (<>

            <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Name
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Email
                    </th>

                    <th scope="col" class="px-6 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>

                  {members.length !== 0 && members.map((m) => {
                    return (
                      <JoinItem username={m.name} email={m.email} key={m._id} />
                    )
                  })}

                </tbody>
              </table>
            </div>
          </>)}


        </div>

        {!loading && members.length === 0 && (<>

          <h1>
            No Joining till Now !
          </h1>
        </>)}

        {loading && (
          <div className='text-danger' style={{ fontSize: '10rem' }}>
            <Loader />
          </div>
        )

        }


      </>)}


     
    </>
  )
}
