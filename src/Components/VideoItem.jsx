import React, { useContext } from 'react'
import VideosContext from '../Context/VideosContext'


export default function VideoItem(props) {
    const Context = useContext(VideosContext)
    const { deleteVideos } = Context
    const { Videos, UpdateVideos } = props;
    return (
        <>
<div className='m-2 p-3' style={{border:'2px solid white',borderRadius:'5px'}}>
            <h5 className="card-title">{props.title}</h5>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={"https://youtube.com/embed/"+props.Url} allowFullScreen></iframe>
            </div>
            <p className="">{props.desc}</p>
            <i className="fa-solid fa-pen-to-square m-2" onClick={() => { UpdateVideos(Videos) }} ></i>
            <i className="fa-solid fa-trash m-2" onClick={() => { deleteVideos(Videos._id) }}></i>
            </div>
        </>
    )
}
