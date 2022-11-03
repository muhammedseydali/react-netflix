import React from 'react'
import axios from 'axios'
import {useState} from 'react'


function Movie() {
    const [state,setState] = useState([])
    return (
        <div className='app'>
            <h1>movie names</h1>
            <button onClick={()=>{
                axios.get('https://jsonplaceholder.typicode.com/posts').then((Response)=>{
                    console.log(Response.data)
                    setState(Response.data)
                })
            }}> clickme</button>
            {state.map((obj,index)=>{
                return(
                    <div>
                        <h1>{index+1}</h1>
                        <h1>{obj.title}</h1>
                        <h1 >{obj.body}</h1>
                    </div>
                )
            })}
            
        </div>
    );
}

export default Movie
