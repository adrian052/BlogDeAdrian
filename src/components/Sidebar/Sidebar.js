import React,{useState,useEffect} from 'react'
import './style.css'
import Card from '../UI/Card/Card'
import blogPost from '../../data/blog.json'
import { NavLink } from 'react-router-dom'

function Sidebar(props) {
    const [posts,setPosts] = useState([])

    useEffect (()=>{
        const posts = blogPost.data
        setPosts(posts)
    },[posts])

    return (
        <div className="sidebarContainer" style={{width:props.width}}>
            <Card style={{marginBottom: '20px',padding: '20px', boxSizing: 'border-box'}}>
                <div className="cardHeader">
                    <span>About us</span>
                </div>
                <div className="profileImageContainer">
                    <img src={require('../../otherImages/yo.jpg')} alt="Imagen personal"/>
                </div>
                <div className="cardBody">
                    <p className="personalBio">Mi nombre es Adrian Ibarra Gonzalez, programador en React Js y estudiante en 7mo Semestre de la carrera de ingenieria de software.</p>
                </div>
            </Card>
            <Card style={{marginBottom: '20px',padding: '20px', boxSizing: 'border-box'}}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
            </Card>
            <Card style={{marginBottom: '20px',padding: '20px', boxSizing: 'border-box'}}>
                <div className="cardHeader">
                    <span>Recent Post</span>
                </div> 
                <div className="recentPosts">
                {posts.map(post =>{
                    return (
                        <NavLink key={post.id}to={`/post/${post.id}`}>
                            <div className="recentPost">
                                <h3>{post.blogTitle}</h3>
                                <span>{post.postedOn}</span>
                            </div>    
                        </NavLink>
                        )
                    
                })}
                
                </div>
            </Card>
        </div>
        
    )
}

export default Sidebar
