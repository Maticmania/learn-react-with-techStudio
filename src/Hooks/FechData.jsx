import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Spin from "../components/Loader";
const FechData = () => {
  // hooks
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  //fetching blogs and axois
  const fetchBlogs = async () => {
    const url = "https://blogg-api-v1.onrender.com/blogs/all";
    try {
      setLoading(true)
      const response = await axios.get(url);
      const data = await response?.data;
        if(data){
          setBlogs(data.blogs);
          setLoading(false)
        }
      // console.log(data?.blogs)
      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);

    // Loader
    if(loading){
      return (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <Spin/>
      </div>
      )
    }

  return (
    <div>
      <h1 className="text-center">Fetch data component</h1>

      {loading ? (<Spin/>) : (<>
        <div className="d-flex flex-wrap justify-content-center gap-3">
        {blogs ? blogs.map((blogging) => {
          const {author,category,content,createdAt,imageUrl,read_time,title,updatedAt, _id } = blogging;
          return (
                    <div className='col-12 col-md-4 col-lg-3' style={{height: "400px", border: "2px solid gray", borderRadius: "5px"}}
                    key={_id}>
                        <div className='card-image'>
                            <img src={imageUrl} alt="" width= "100%" height= "200px"/>
                            </div>
                            <div className='text-start ps-3'>
                           <b>{title}</b>
                           <p>{content.slice(0, 35)}</p>
                           <p>{author}</p>
                           <p>{read_time}min</p>
                           </div>
                    </div>

          );
        }) : <h1>LOADING...</h1>}
      </div>
      </>)}
      
    </div>
  );
};

export default FechData;
