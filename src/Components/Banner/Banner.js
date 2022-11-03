import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from '../../constants/constants'
import axios from '../../axios'
import './Banner.css'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
         axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
             console.log(response.data.results[0])
             setMovie(response.data.results[1])
         })
    }, [])
    return (
        <div
        style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :''})`}}
        className='banner'>
            <div className='content'>
                <h1 className='title'>{movie ? movie.title: ''}</h1>
                <h1 className='decription'></h1>
                <div className="fade_bottom"></div>

            </div>
            </div>

    )
}
    
export default Banner
