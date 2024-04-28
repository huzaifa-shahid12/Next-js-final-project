// import React from "react";
// import "./card.css";

// import { AiFillLike } from "react-icons/ai";
// import { FaCommentDots } from "react-icons/fa";
// import { TbLocationShare } from "react-icons/tb";

// const PostCard = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="card">
//           <div className="card-body">
//             <div color="cardImg">
//               <img
//                 src="data:image/jpeg;base64,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"
//                 // src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//                 className="card-img-top"
//                 alt="..."
//               />
//             </div>
//             <div className="p-[10px]">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </p>
//             </div>
//             <div className="actionDiv">
//               <AiFillLike className="action" />
//               <FaCommentDots className="action" />
//               <TbLocationShare className="action" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="card">
//           <div className="card-body">
//             <div color="cardImg">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCcZgzHS5HS02nxVXYM-ZV7LxuHqbUNdCj8A&usqp=CAU"
//                 // src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//                 className="card-img-top"
//                 alt="..."
//               />
//             </div>
//             <div className="p-[10px]">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </p>
//             </div>
//             <div className="actionDiv">
//               <AiFillLike className="action" />
//               <FaCommentDots className="action" />
//               <TbLocationShare className="action" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="card">
//           <div className="card-body">
//             <div color="cardImg">
//               <img
//                 src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCcZgzHS5HS02nxVXYM-ZV7LxuHqbUNdCj8A&usqp=CAU"
//                 // src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//                 className="card-img-top"
//                 alt="..."
//               />
//             </div>
//             <div className="p-[10px]">
//               <h5 className="card-title">Card title</h5>
//               <p className="card-text">
//                 Some quick example text to build on the card title and make up
//                 the bulk of the card's content.
//               </p>
//             </div>
//             <div className="actionDiv">
//               <AiFillLike className="action" />
//               <FaCommentDots className="action" />
//               <TbLocationShare className="action" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default PostCard;

// PostCard.js
"use client";
import React, { useState, useEffect } from "react";
import { getApiData } from "../config/firebase";
// import { getApiData } from "./config/fireBase";
import "./card.css";

import { AiFillLike } from "react-icons/ai";
import { FaCommentDots } from "react-icons/fa";
import { TbLocationShare } from "react-icons/tb";

const PostCard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const getPost = await getApiData();
    setPosts(getPost);
    console.log(getPost);
  };

  return (
    <>
      {posts.map((post) => {
        return (
          <div className="container">
            <div className="card">
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                }}
              >
                <img
                  src="data:image/jpeg;base64,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"
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    margin: "10px",
                  }}
                />
                <h3 className="text-[16px] font-bold">Huzaifa Shahid. </h3>
                <span className="text-[gray]">3m</span>
              </div>
              <div className="card-body">
                <div color="cardImg">
                  <img src={post.image} className="card-img-top" alt="..." />
                </div>

                <p className="card-text p-[10px]">{post.description}</p>
                <div className="actionDiv gap-[20px] ps-[15px] pb-[20px]">
                  <svg
                    aria-label="Like"
                    class="x1lliihq x1n2onr6 xyb1xck"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Like</title>
                    <path d="M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z"></path>
                  </svg>

                  <svg
                    aria-label="Comment"
                    class="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Comment</title>
                    <path
                      d="M20.656 17.008a9.993 9.993 0 1 0-3.59 3.615L22 22Z"
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></path>
                  </svg>

                  <svg
                    aria-label="Share Post"
                    class="x1lliihq x1n2onr6 x5n08af"
                    fill="currentColor"
                    height="24"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <title>Share Post</title>
                    <line
                      fill="none"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                      x1="22"
                      x2="9.218"
                      y1="3"
                      y2="10.083"
                    ></line>
                    <polygon
                      fill="none"
                      points="11.698 20.334 22 3.001 2 3.001 9.218 10.084 11.698 20.334"
                      stroke="currentColor"
                      stroke-linejoin="round"
                      stroke-width="2"
                    ></polygon>
                  </svg>
                  {/* <AiFillLike className="action" />
                  <FaCommentDots className="action" />
                  <TbLocationShare className="action" /> */}
                </div>
                <div className="p-[20px] comment-div">
                  <input
                    className="p-[10px] w-[100%]"
                    placeholder="Add a comment..."
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PostCard;
