import React, { useEffect, useState } from 'react'
import FeedbackItem from './FeedbackItem';

export default function Feedbacks() {

    const [feedback, SetFeedback] = useState([])

    const getFeedBack =async()=>{
        const req = await fetch('http://localhost:8000/api/feedback/getfeedback')
        const json = await req.json();
        SetFeedback(json)
        console.log(json)

    }

useEffect(()=>{
    getFeedBack();
},[])
  return (
    <>
    <div className='container-fluid mt-5'></div>
    <h1>FeedBack Inquiries</h1>
    <div className='container mt-5'>
        <div className='row'>
      { feedback.length!==0 && (
       feedback.map((feed)=>{
        return(
            <FeedbackItem key={feed._id} firstname={feed.firstname} lastname={feed.lastname} salutation={feed.salutation} subject={feed.subject} description={feed.description} email={feed.email} />
        )
       })
      )}
      { feedback.length===0 && (
        <h1 style={{marginTop:'5rem'}}>No FeedBacks Till Now</h1>
      )

      }
      </div>
      </div>
    </>
  )
}
