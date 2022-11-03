import axios from '../../axios'
import React ,{useEffect,useState}from 'react'
import Youtube from 'react-youtube'
import {API_KEY,imageUrl} from '../../constants/constants'
import './Rowpost.css'

function Rowpost(props) {
    const [movies, setMovies] = useState([])
    const [id,setId] = useState('')
    useEffect(() => {
        axios.get(props.url).then(response=>{
            console.log(response.data)
            setMovies(response.data.results)
        }).catch(err=>{
        })
    },)
    
    const opts = {
        height :'390',
        width :'100%', 
        playerVars:{

            autoplay :1,
        },
    }; 
    const handleMovie = (id)=>{
        console.log(id)
        axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.length!==0){
                setId(response.data.results[0])
            }else{
                console.log('array empty')
            }
        }) 
    }

    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>

                 <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl+ obj.backdrop_path}`}/>
                  )}
                
            </div>
         { id && <Youtube opts={opts} videoId={id.key} />  }
        </div>
    )
}

export default Rowpost
