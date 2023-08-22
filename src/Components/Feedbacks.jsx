import React, { useEffect, useState } from 'react'
import FeedbackItem from './FeedbackItem';
import  Loader  from './Loader';
import Spinner from 'react-bootstrap/Spinner';

export default function Feedbacks() {
  const auth = localStorage.getItem("auth-token")
    const [feedback, SetFeedback] = useState([])
    const [loading,setLoading]= useState(false)
    const getFeedBack =async()=>{
        setLoading(true)
        const req = await fetch('https://gold-adventurous-perch.cyclic.cloud/api/feedback/getfeedback')
        const json = await req.json();
        setLoading(false)
        SetFeedback(json)
        console.log(json)

    } 

useEffect(()=>{
    getFeedBack();
},[])
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


    <div className='container-fluid mt-5'></div>
    <h1>FeedBack Inquiries</h1>
    <div className='container mt-5'>
        <div className='row'>
      {!loading && feedback.length!==0 && (
       feedback.map((feed)=>{
        return(
            <FeedbackItem key={feed._id} firstname={feed.firstname} lastname={feed.lastname} salutation={feed.salutation} subject={feed.subject} description={feed.description} email={feed.email} />
        )
       })
      )}
      {!loading && feedback.length===0 && (
        <h1 style={{marginTop:'5rem'}}>No FeedBacks Till Now</h1>
      )

      }

      {loading &&  (
      <div className='text-danger' style={{fontSize:'10rem'}}>
        <Spinner animation="border" variant="danger" size="lg" />
        </div>
      )

      }

      </div>
      </div></>)}
    </>
  )
}
