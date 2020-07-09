import React from 'react'
import './style.css'
import Card from '../UI/Card/Card'
import BlogPost from '../BlogPost/BlogPost'
import Sidebar from '../Sidebar/Sidebar'

function Post(props) {
    console.log(props)
    return (
        <section className="container">
            <BlogPost {...props}/>
            <Sidebar/>
        </section>
    )
}

export default Post
