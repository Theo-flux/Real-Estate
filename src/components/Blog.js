import React from 'react'
import Cards from './Cards'
import {BlogCard, Post} from './BlogPost'
import post1 from '../images/post-1.svg'
import post2 from '../images/post-2.svg'
import post3 from '../images/post-3.svg'
import author1 from '../images/author-1.svg'
import author2 from '../images/author-2.svg'
import author3 from '../images/author-3.svg'
import blog1 from '../images/blog-1.svg'

export default function Blog(props){

  return(
    <div className="main container">
      <div className="main-head">

        <div className="main-head-title">
          <p><small>{props.type}</small></p>
          <h3>{props.feature}</h3>
        </div>

        <div className="main-head-side">
          <a className="side-links side-link-active">view all</a>
        </div>
      </div>

      <div className="main-body">
        <div className="posts">
          <Post
            image={post1}
            avatar={author2}
            name='Aliyan Baig'
            title='The things we need to check when we want to buy a house'
            duration='4'
            date='25 April 2021'
          />

          <Post
            image={post2}
            avatar={author2}
            name='Jane Cooper'
            title='7 Ways to distinguish the quality of the house we want to buy'
            duration='4'
            date='25 April 2021'
          />

          <Post
            image={post3}
            avatar={author2}
            name='Robert Fox'
            title='The best way to know the quality of the house we want to buy'
            duration='4'
            date='25 April 2021'
          />
        </div>

        <div className="blog-post">
          <BlogCard
            image={blog1}
            avatar={author2}
            name='Cameron Williamson'
            title='12 Things to know before buying a house'
            text= 'Want to buy a house but are unsure about what we should know,
                  here I will try to explain what we should know and check when
                  we want to buy a house'
            duration='8'
            date='25 April 2021'
          />
        </div>

      </div>

    </div>
  )
}
