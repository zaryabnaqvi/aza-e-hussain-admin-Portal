import React, { useContext, useEffect, useRef, useState } from 'react'
import VideosContext from '../Context/VideosContext';
import AddVideos from './AddVideos';

import VideosItem from './VideoItem';

export default function Videos() {
    const auth = localStorage.getItem('auth-token')
    const Context = useContext(VideosContext);
    const [Video, setVideos] = useState({ id: "", videotitle: "", videolink: "", videotype: "", videodesc: "" })
    useEffect(() => {

        Context.getVideos();
        // eslint-disable-next-line 

    }, [Video])

    const ref = useRef(null)
    const refClose = useRef(null)





    const UpdateVideos = (currentVideos) => {
        setVideos({ id: currentVideos._id, videotitle: currentVideos.title, videolink: currentVideos.Url, videotype: currentVideos.choice, videodesc: currentVideos.desc })
        console.log(currentVideos)
        ref.current.click();
    }


    const EditVideos = (e) => {
        Context.UpdateVideos(Video.id, Video.videotitle, Video.videolink, Video.videotype, Video.videodesc);
        window.location.reload();
        refClose.current.click();


    }
    const onChange = (e) => {
        setVideos({ ...Video, [e.target.name]: e.target.value })
    }

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

                <button type="button" ref={ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" style={{color:'black'}} id="exampleModalLabel">Edit Videos</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-left">
      <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"style={{color:'black'}}>Title</label>
                    <input type="text" className="form-control" id="etitle" name='videotitle' value={Video.videotitle} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="link" className="form-label"style={{color:'black'}}>Link</label>
                    <input type="text" className="form-control" id="elink" name='videolink' value={Video.videolink} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Type" className="form-label"style={{color:'black'}}>Type</label>
                    <input type="text" className="form-control" id="etype" name='videotype' value={Video.videotype} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label"style={{color:'black'}}>Description</label>
                    <input type="text" className="form-control" id="edesc" name='videodesc' value={Video.videodesc} onChange={onChange} />
                </div>
                   
            </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" disabled={Video.videotitle.length<5 || Video.videodesc.length<5} className="btn btn-danger" data-bs-dismiss="modal" onClick={EditVideos}>Save changes</button>
      </div>
    </div>
  </div>
</div>



            <div className='container mt-5'>
                <h1>Manage Videos</h1>
                <AddVideos/>
                <h1>Videos</h1>
                <div className='row'>

                    {Context.Videos.length===0 && (<p>No Videos to Show</p>)}
                    {Context.Videos.map((notes) => {
                        return (
                            <div className='col-sm-5 m-3' key={notes._id}>
                                <VideosItem title={notes.title} Url={notes.Url} desc={notes.desc} Videos={notes} UpdateVideos={UpdateVideos}/>
                            </div>

                        )
                    })}

                </div>
            </div>
            </>)}
        </>
    )
}
