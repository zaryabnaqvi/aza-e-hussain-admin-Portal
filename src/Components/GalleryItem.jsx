import React, { useContext } from 'react'
import GalleryContext from '../Context/GalleryContext'


export default function GalleryItem(props) {
    const Context = useContext(GalleryContext)
    const { deleteGallery } = Context
    const { Gallery, UpdateGallery } = props;
    return (
        <>

    
<article className="postcard dark red">
			<a className="postcard__img_link" href="#">
				<img className="postcard__img" src={props.Url} alt="Image Title" />	
			</a>
			<div className="postcard__text">
				<h1 className="postcard__title red"><a href="#">{props.title}</a></h1>
				<div className="postcard__subtitle small">
					<time dateTime="2020-05-25 12:00:00">
						<i className="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
					</time>
				</div>
				<div className="postcard__bar"></div>
				<div className="postcard__preview-txt">{props.desc}</div>
				<ul className="postcard__tagbox">
					<li className="tag__item"><i className="fas fa-tag mr-2"></i>{Gallery.choice}</li>
					<li className="tag__item"> <i className="fa-solid fa-pen-to-square m-2" onClick={() => { UpdateGallery(Gallery) }} ></i></li>
					<li className="tag__item play red">
                    <i className="fa-solid fa-trash m-2" onClick={() => { deleteGallery(Gallery._id) }}></i>
					</li>
				</ul>
			</div>
		</article>
                           
                           
           

        </>
    )
}
