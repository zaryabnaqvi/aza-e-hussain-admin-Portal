import React, { useState ,useContext } from 'react'

  import VideoContext from '../Context/VideosContext'


export default function Videos() {
   const Context = useContext(VideoContext)
    const {AddVideos}=Context
    
    const AddVideo=(e)=>{
        e.preventDefault();
        AddVideos(Video.videotitle,Video.videolink,Video.videotype,Video.videodesc);
        setVideos({videotitle:"",videolink:"",videotype:"",videodesc:""});
        window.location.reload();
    }
    
    const [Video,setVideos]=useState({videotitle:"",videolink:"",videotype:"",videodesc:""})


  
    const onChange =(e)=>{
      
      setVideos({...Video,[e.target.name]:e.target.value})

    }

  return (
    <>
    <div className='container'>

    <div className="container py-5 w">
    

    <form className="p-md-5 border rounded-3 bg-body-tertiary">

      <h1>Add new Video</h1>
      <p>Enter every data very corrrectly</p>

      <div className="form-floating mb-3">
        <input type="text" id="form4Example1" className="form-control" name='videotitle' onChange={onChange} />
        <label className="form-label"style={{color:'black'}} forhtml="form4Example1">Video title</label>
      </div>



      

      <div className="form-floating mb-3">
        <input type="text" id="form4Example2" className="form-control" name='videolink' onChange={onChange} />
        <label className="form-label"style={{color:'black'}} forhtml="form4Example2">Video Link</label>
      </div>



      

      <select className="form-select mb-3" aria-label="Default select example" name='videotype' onChange={onChange}>
        <option defaultValue="majlis"> Select -- Video type</option>
        <option value="Majlis">Majlis</option>
        <option value="Manqabat">Manqabat</option>
        <option value="Jashan">Jashan</option>
      </select>

      <div className="form-floating mb-3">
        <input type="text" id="form4Example3" className="form-control" name='videodesc' onChange={onChange} />
        <label className="form-label"style={{color:'black'}} forhtml="form4Example3">Video Description</label>
      </div>



      
      <button type="submit" className="w-100 btn btn-lg btn-danger" onClick={AddVideo}>ADD VIDEO</button>

    </form>


</div>
    </div>
    </>
  )
}
  