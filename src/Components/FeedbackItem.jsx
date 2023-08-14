import React from 'react'

export default function FeedbackItem(props) {
  return (
    <>
        
<div class="text-left col-sm-6 " >
    <div className='border border-danger rounded m-3 p-3'>
        <i class="text-danger h1 fa-solid fa-comment"></i>
    <a href="#">
        <h5 class="mb-2 text-left text-2xl font-semibold tracking-tight text-white">{props.subject}</h5>
    </a>
    <p class="mb-3 text-left font-normal text-gray-500 dark:text-gray-400">{props.description}</p>
    <p  class="text-left text-danger hover:underline"><i class="fa-solid h4 me-2 fa-user"></i> {props.salutation}. {props.firstname} {props.lastname}</p>
    <p  class="text-left text-danger hover:underline"><i class="fa-solid h4 me-2 fa-envelope"></i> {props.email}</p>
    </div>

</div>

      
    </>
  )
}
