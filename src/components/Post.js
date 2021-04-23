import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import sanityClient from '../client.js';

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
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive">
          Blog Posts Page
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my page of blog posts
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* we will need to map  over all the info below */}
          {postData &&
            postData.map((post, index) => (
              <article>
            {/* whichever current post we're clicking on will be selected via the line below */}
            <Link to={"/post/" + post.slug.current} key={post.slug.current}>
            <span
                    className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-green-400"
                    key={index}
                  >
              
              {/* if I wanted to have a consistent wallpaper i could bring it in here like i did for homepage, but if i want to have a specific background for each post/blog post then i will use this part below */}
              <img
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt}
              className="w-full h-full rounded-r object-cover absolute"
            />
            <span className="block relative h-full flex justify-end items-end pr-4 pb-4">
              <h3 className="text-gray-800 text-lg font-blog px-3 py-4 bg-red-700 text-red-100 bg-opacity-75 rounded">
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
