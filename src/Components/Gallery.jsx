import React, { useContext, useEffect, useRef,useState } from 'react'
import GalleryContext from '../Context/GalleryContext';
import AddGallery from './AddGallery';

import GalleryItem from './GalleryItem';


import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase.js";



export default function Gallery() {

  const auth = localStorage.getItem('auth-token')

    const Context = useContext(GalleryContext);
    
    const [Gallery,setGallery]=useState({id:"",Gallerytitle:"",Gallerylink:"",Gallerytype:"",Gallerydesc:""})
    useEffect(()=>{

        Context.getGallery();
        // eslint-disable-next-line 
        
},[Gallery])

    const Ref=useRef(null)
    const RefClose =useRef(null)


    const handleImageUpload =(event) => {
      const file = event.target.files[0];  
  
      if (file) {
  
        const imageRefer = ref(storage, `images/${file.name}`);
      uploadBytes(imageRefer, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          setGallery({...Gallery,Gallerylink:url});
        });
      });
  
        // const imageBase64 =await Base64Converter(file);
  
  
  
  
        //   setGallery({...Gallery,Gallerylink:imageBase64});
        //   console.log(imageBase64)
      }
    }; 





    const UpdateGallery=(currentGallery)=>{
        setGallery({id:currentGallery._id,Gallerytitle:currentGallery.title,Gallerylink:currentGallery.Url,Gallerytype:currentGallery.choice,Gallerydesc:currentGallery.desc})
        console.log(currentGallery)
        Ref.current.click();
        

    }

    
    const EditGallery=(e)=>{
        Context.UpdateGallery(Gallery.id,Gallery.Gallerytitle,Gallery.Gallerylink,Gallery.Gallerytype,Gallery.Gallerydesc);
        // window.location.reload();
        RefClose.current.click();
        
  
        
    }
    const onChange =(e)=>{
        setGallery({...Gallery,[e.target.name]:e.target.value})
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


<button type="button" ref={Ref} className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" style={{color:'black'}} id="exampleModalLabel">Edit Gallery</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label"style={{color:'black'}} >Title</label>
                    <input type="text" className="form-control" id="etitle" name='Gallerytitle' value={Gallery.Gallerytitle} onChange={onChange} />
                </div>



                 <div className="mb-3 text-left">
      <label className="form-label text-left" forhtml="form4Example2">Gallery Image</label>
        <input type="file" accept=".jpeg, .png, .jpg" id="form4Example2" className="form-control" name='Gallerylink' onChange={handleImageUpload} />
        
      </div>
      {Gallery.Gallerylink && (
        <div className='text-center'>
          <h3 style={{color:'black'}}>Uploaded Image:</h3>
          <img src={`${Gallery.Gallerylink}`} alt="Uploaded" className='rounded mx-auto d-block mb-3' style={{maxWidth:'400px',width:'100%',height:'auto'}} />
        </div>
      )}


                <div className="mb-3">
                    <label htmlFor="Type" className="form-label"style={{color:'black'}}>Type</label>
                    <input type="text" className="form-control" id="etype" name='Gallerytype' value={Gallery.Gallerytype} onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label"style={{color:'black'}}>Description</label>
                    <input type="text" className="form-control" id="edesc" name='Gallerydesc' value={Gallery.Gallerydesc} onChange={onChange} />
                </div>
                   
            </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" disabled={Gallery.Gallerytitle.length<5 || Gallery.Gallerydesc.length<5} className="btn btn-danger" data-bs-dismiss="modal" onClick={EditGallery}>Save changes</button>
      </div>
    </div>
  </div>
</div>



            <div className='container mt-5'>
                <h1>Manage Gallery</h1>
                <AddGallery/>
                <h1>Gallery</h1>


                    {Context.Gallery.length===0 && (<p>No Gallery to Show</p>)}
                    {Context.Gallery.map((notes) => {
                        return (
                            <div key={notes._id}>
                                <GalleryItem title={notes.title} Url={notes.Url} desc={notes.desc} Gallery={notes} UpdateGallery={UpdateGallery}/>
                            </div>

                        )
                    })}

                </div></>)}
    
        </>
    )
}
