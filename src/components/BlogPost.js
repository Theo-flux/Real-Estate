import React from 'react'

export function Post({image,avatar,name,title,duration,date}){
  return(
    <div className="post-card">
      <div className="post-right">
        <img src={image}/>
      </div>

      <div className="post-left">
        <div className = "post-author">
          <img src={avatar}/>
          <p><small>{name}</small></p>
        </div>
        <h4>{title}</h4>
        <p><i className="fas fa-clock"></i><small> {duration} Min Read | {date}</small></p>
      </div>
    </div>
  )
}

export function BlogCard({image,avatar,name,title,text,duration,date}){
  return(
    <div className="blog-card">
      <img src={image} />
      <div className = "blog-author">
        <img src={avatar}/>
        <p><small>{name}</small></p>
      </div>
      <h4>{title}</h4>
      <p><small>{text}</small></p>
      <p><i className="fas fa-clock"></i><small> {duration} Min Read | {date}</small></p>
    </div>
  )
}
