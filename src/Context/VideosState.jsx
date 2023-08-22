import React, { useState } from 'react'
import VideosContext from './VideosContext'

 const VideosState=(props)=> {
  
    const [Videos,setVideos]=useState([]);


 
  const getVideos=async()=>{
    const data = await fetch("https://gold-adventurous-perch.cyclic.cloud/api/videos/getvideos",{
      method:"GET",
    
    })
    const json=await data.json();
    
    setVideos(json)
  }

  const AddVideos=async(title,Url,choice,desc)=>{
    const data = await fetch("https://gold-adventurous-perch.cyclic.cloud/api/videos/createvideos",{
      method:"POST",
      headers:{
        "Content-type":"application/json" 
      },
      body:JSON.stringify({title,Url,choice,desc})}
    )
    const json=await data.json();
    console.log(json)
    let state=Videos;
    setVideos(state.concat(json))
    window.location.reload();

  }

  const UpdateVideos=async(id,title,Url,choice,desc)=>{
    const data = await fetch(`https://gold-adventurous-perch.cyclic.cloud/api/videos/updatevideos/${id}`,{
      method:"PUT",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify({title,Url,choice,desc})}
    )
    let EditNotes=Videos;
    console.log(EditNotes)
    for (let index = 0; index < EditNotes.length; index++) {
      if (EditNotes[index]._id===id){
        EditNotes[index].title=title;
        EditNotes[index].Url=Url;
        EditNotes[index].choice=choice;
        EditNotes[index].desc=desc;
        break;
      }
    }
    console.log(EditNotes);
    setVideos(EditNotes);

    

  }
  const deleteVideos=async(id)=>{
    console.log(id)
    const data = await fetch(`https://gold-adventurous-perch.cyclic.cloud/api/videos/deletevideos/${id}`,{
      method:"DELETE",
     
    })
    const NewNotes = Videos.filter((video)=>{return video._id!==id});
    setVideos(NewNotes);


  }



  
  
  
  return (
    <VideosContext.Provider value={{Videos,setVideos,AddVideos,UpdateVideos,deleteVideos,getVideos}}>
        {props.children}
    </VideosContext.Provider>   
  )
}

export default VideosState;

