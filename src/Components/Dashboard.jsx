import React,{useContext, useEffect, useState} from 'react'
import VideosContext from '../Context/VideosContext';
import GalleryContext from '../Context/GalleryContext';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

export default function Dashboard() {


  const auth = localStorage.getItem("auth-token")
 const [count,setCount]=useState(0)
 const [count1,setCount1]=useState(0)
 const [loading,setLoading]= useState(false)



useEffect(()=>{
  if(auth){
    setLoading(true)
  VC.getVideos();
  GC.getGallery();
  const getFeedBack=async()=>{const req = await fetch('https://gold-adventurous-perch.cyclic.cloud/api/feedback/getfeedback')
  const json = await req.json();
  setCount(json.length)}

  getFeedBack(); 

  const getJoin=async()=>{ const req1 = await fetch('https://gold-adventurous-perch.cyclic.cloud/api/join/getJoin')
  const json1 = await req1.json();
  setCount1(json1.length)
  setLoading(false)

}

  getJoin();

  }  
  else{
    window.location.replace('/login')

  }
},[])

  const VC = useContext(VideosContext);
  const arr1 =VC.Videos;
  const GC = useContext(GalleryContext);
  const arr2 = GC.Gallery;


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


            {!loading && auth && auth === '64db59e325c7945c4ee3d2ff' && (<>


      <div className='container-fluid mt-5 pt-5'>
              <h1>Dashboard</h1>
<div className="container pt-5">


  <div className="row" >
    <div className="col-sm-6 col-md-12 col-lg-6">
      <div className="row rounded p-2 align-items-center m-1" style={{ border: '3px solid white' }}>
        <div className="col-sm-4 col-md-12 col-lg-4">
          <i className="fa-regular fa-image text-danger" style={{ fontSize: '8rem' }}></i>
        </div>
        <div className="col-sm-8 text-left  col-md-12 col-lg-8">
         <p style={{ fontSize: '3rem',marginBottom:'0rem' }}> {arr2.length} Photos </p>
         <p style={{ fontSize: '1rem', marginTop:'-10px' }}>has been posted <br />
        <span style={{textDecoration:"underline"}} ><Link to='/gallery'> Click here to manage </Link> </span>
         </p>
          
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-md-12 col-lg-6">
      <div className="row rounded p-2 align-items-center m-1" style={{ border: '3px solid white' }}>
        <div className="col-sm-4  col-md-12 col-lg-4">
          <i className="fa-solid fa-video text-danger" style={{ fontSize: '8rem' }}></i>
        </div>
        <div className="col-sm-8 text-left  col-md-12 col-lg-8">
         <p style={{ fontSize: '3rem',marginBottom:'0rem' }}> {arr1.length} Videos </p>
         <p style={{ fontSize: '1rem', marginTop:'-10px' }}>has been posted <br />
        <span style={{textDecoration:"underline"}} ><Link to="/videos"> Click here to manage </Link></span>
         </p>
            
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-md-12 col-lg-6">
      <div className="row rounded p-2 align-items-center m-1" style={{ border: '3px solid white' }}>
        <div className="col-sm-4 col-md-12 col-lg-4">
          <i className="fa-solid fa-people-group text-danger" style={{ fontSize: '8rem' }}></i>
        </div>
        <div className="col-sm-8 text-left col-md-12 col-lg-8">
         <p style={{ fontSize: '3rem',marginBottom:'0rem' }}> {count1} person </p>
         <p style={{ fontSize: '1rem', marginTop:'-10px' }}>has been joined the team <br />
        <span style={{textDecoration:"underline"}} ><Link to="/joinings"> Click here to manage </Link></span>
         </p>
          
        </div>
      </div>
    </div>
    <div className="col-sm-6 col-md-12 col-lg-6">
      <div className="row rounded p-2 align-items-center m-1" style={{ border: '3px solid white' }}>
        <div className="col-sm-4 col-md-12 col-lg-4">
          <i className="fa-solid fa-question text-danger" style={{ fontSize: '8rem' }}></i>
        </div>
        <div className="col-sm-8 text-left col-md-12 col-lg-8">
         <p style={{ fontSize: '3rem',marginBottom:'0rem' }}> {count1} Feedbacks </p>
         <p style={{ fontSize: '1rem', marginTop:'-10px' }}>has been posted <br />
        <span style={{textDecoration:"underline"}} ><Link to="/feedbacks">Click here to manage</Link> </span>
         </p>    
          
        </div>
      </div>
    </div>
   
  </div>
</div>
</div></>)}  


{loading &&  (
      <div className='text-danger' style={{fontSize:'10rem'}}>
        <Spinner animation="border" variant="danger" size="lg" />
        </div>
      )

      }

    </>
  )
}
