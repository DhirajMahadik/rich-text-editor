import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const SingleBlog = () => {

    const {id} = useParams()

    const [blog, setBlog] = useState({title:'',content:''})
    
    const getSingleBlog = () => {
        axios.get(`http://localhost:5500/api/blogs/${id}`)
            .then((response) => {
                setBlog(response.data)
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data)
                } else {
                    alert(error.msg)
                }
            })
    }

    useEffect(()=>{
        getSingleBlog()
    },[])

  return (
    <div className='container'>
        <div className="my-2">
            <h3 className='text-center'>{blog.title}</h3>
        </div>
        {parse(blog.content)}
    </div>
  )
}

export default SingleBlog