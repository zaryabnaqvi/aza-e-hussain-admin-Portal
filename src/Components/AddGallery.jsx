import React, { useState ,useContext } from 'react'

import GalleryContext from '../Context/GalleryContext'

import {
  ref,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import { storage } from "../firebase.js";



export default function Gallery() {
   const Context = useContext(GalleryContext)
    const {AddGallery}=Context
    
    const AddGallerys=(e)=>{
        e.preventDefault();
        AddGallery(Gallery.Gallerytitle,Gallery.Gallerylink,Gallery.Gallerytype,Gallery.Gallerydesc);
        setGallery({Gallerytitle:"",Gallerylink:"",Gallerytype:"",Gallerydesc:""});
        // window.location.reload();
    
    } 





    const handleImageUpload = (event) => {
    const file = event.target.files[0];  

    if (file) {

      const imageRef = ref(storage, `images/${file.name}`);
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setGallery({...Gallery,Gallerylink:url});
      });
    });

      // const imageBase64 =await Base64Converter(file);




      //   setGallery({...Gallery,Gallerylink:imageBase64});
      //   console.log(imageBase64)
    }
  }; 

    const [Gallery,setGallery]=useState({Gallerytitle:"",Gallerylink:"",Gallerytype:"",Gallerydesc:""})


    const onChange =(e)=>{
      
      setGallery({...Gallery,[e.target.name]:e.target.value})

    }

  return (
    <>
    <div className='container'>

    <div className="container py-5 w">
    

    <form className="p-md-5 border rounded-3 bg-body-tertiary">

      <h1>Add new Gallery</h1>
      <p>Enter every data very correctly</p>

      <div className="form-floating mb-3">
        <input type="text" id="form4Example1" className="form-control" name='Gallerytitle' onChange={onChange} />
        <label className="form-label" forhtml="form4Example1" style={{color:'black'}}>Gallery title</label>
      </div>



      

      <div className="mb-3 text-left">
      <label className="form-label text-left" forhtml="form4Example2">Gallery Image</label>
        <input type="file" accept=".jpeg, .png, .jpg" id="form4Example2" className="form-control" name='Gallerylink' onChange={handleImageUpload} />
        
      </div>
      {Gallery.Gallerylink && (
        <div className='text-center'>
          <h3>Uploaded Image:</h3>
          <img src={`${Gallery.Gallerylink}`} alt="Uploaded" className='rounded mx-auto d-block mb-3' style={{maxWidth:'400px',width:'100%',height:'auto'}} />
        </div>
      )}
      



      

      <select className="form-select mb-3" aria-label="Default select example" name='Gallerytype' onChange={onChange}>
        <option defaultValue="majlis"> Select -- Gallery type</option>
        <option value="Majlis">Majlis</option>
        <option value="Jashan">Jashan</option>
        <option value="Accouncement">Accouncement</option>
      </select>

      <div className="form-floating mb-3">
        <input type="text" id="form4Example3" className="form-control" name='Gallerydesc' onChange={onChange} />
        <label className="form-label" style={{color:'black'}} forhtml="form4Example3">Gallery Description</label>
      </div>



      
      <button type="submit" className="w-100 btn btn-lg btn-danger" onClick={AddGallerys}>ADD Gallery</button>

    </form>


</div>
    </div>
    </>
  )
}
  