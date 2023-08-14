import React, { useState } from 'react'
import GalleryContext from './GalleryContext'

 const GalleryState=(props)=> {
  
    const [Gallery,setGallery]=useState([]);



  const getGallery=async()=>{
    const data = await fetch("http://localhost:8000/api/gallery/getgallery",{
      method:"GET",
    
    })
    const json=await data.json();
    
    setGallery(json)
  }

  const AddGallery=async(title,Url,choice,desc)=>{
    const data = await fetch("http://localhost:8000/api/gallery/creategallery",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify({title,Url,choice,desc})}
    )
    const json=await data.json();
    let state=Gallery;
    setGallery(state.concat(json))

  }

  const UpdateGallery=async(id,title,Url,choice,desc)=>{
    const data = await fetch(`http://localhost:8000/api/gallery/updategallery/${id}`,{
      method:"PUT",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify({title,Url,choice,desc})}
    )
    let EditNotes=Gallery;
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
    setGallery(EditNotes);

    

  }
  const deleteGallery=async(id)=>{
    console.log(id)
    const data = await fetch(`http://localhost:8000/api/gallery/deletegallery/${id}`,{
      method:"DELETE",
     
    })
    const NewNotes = Gallery.filter((video)=>{return video._id!==id});
    setGallery(NewNotes);


  }



  
  
  
  return (
    <GalleryContext.Provider value={{Gallery,setGallery,AddGallery,UpdateGallery,deleteGallery,getGallery}}>
        {props.children}
    </GalleryContext.Provider>   
  )
}

export default GalleryState;

