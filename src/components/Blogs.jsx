import React from "react";
import "./blogs.css"
import NavigationBar from "./NavigationBarRecruiter";

export default function Blogs(){

    function handleBlogClick(){
        window.open("https://readaboutsadhu.blogspot.com/2023/04/me-myself-and-mine.html",'_blank', 'noopener,noreferrer')
    }

    return (
        <div className="blog-main">
            <NavigationBar />
            <h1>Blog Written by me</h1>
            <div className="blog-comp" onClick={handleBlogClick}>
                <img src="/assets/images/blog/blog-SS.png" />
                <h2>Short blog about myself, my interests and aspirations</h2>
            </div>
        </div>
    )
}