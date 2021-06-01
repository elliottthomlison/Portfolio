import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import sanityClient from '../client.js';
import bg2 from "../bg.jpg";

// flow of data => state, usestate, setstate
export default function Post() {
  // set is called postData, setting our state is is called setpost
  const [postData, setPost] = useState(null);

  useEffect(() => {
    sanityClient
    // * = all | grab all titles with the title of post | 
      .fetch(
        `*[_type == 'post']{
        title,
        slug,
        mainImage{
          asset->{
            _id, 
            url
          },
          alt
        }
      }`
      )
      //fetch the data then...
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);

  return (
    <main className="absolute object-cover w-full h-full">

    {/* <img src={bg2} alt="background" className="absolute object-cover w-full h-120"/> */}
  
  <section className="container mx-auto">
  <h1 className="relative text-6xl text-blue-900 flex justify-center cursive pt-20 hover:text-gray-900">Welcome to my Blog Posts Page!</h1>
        <h2 className="relative text-4xl text-gray-900 flex justify-center mb-12 pb-10 hover:text-gray-900">
          Here I share posts that I've published on Medium.com 
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* we will need to map  over all the info below */}
          {postData &&
            postData.map((post, index) => (
              <article>
            {/* whichever current post we're clicking on will be selected via the line below */}
            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
            <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border"
                    key={index}
                  >
              
              {/* if I wanted to have a consistent wallpaper i could bring it in here like i did for homepage, but if i want to have a specific background for each post/blog post then i will use this part below */}
              <img
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt}
              className="w-full h-full rounded-r object-cover absolute"
            />
            <span className="relative justify items-start">
              <h3 className="items-start text-lg px-3 py-4 bg-blue-700 text-blue-100 bg-opacity-75 rounded">
                {post.title}
              </h3>
              
            </span>
          </span>
        </Link>
      </article>
    ))}
</div>
</section>
</main>
);
}