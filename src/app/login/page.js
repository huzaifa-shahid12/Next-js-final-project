// "use client";
// import React, { useState } from "react";
// import Head from "next/head";
// import "../styles/login.css";
// import { login, signup } from "../config/firebase";
// import Link from "next/link";

// const Login = () => {
//   // State variables for form inputs
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   // Handle form submission
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // Perform login logic with username and password
//     console.log({
//       username,
//       password,
//     });

//     try {
//       const cheack = await login({
//         email: username,
//         password,
//       });
//     } catch (error) {
//       console.error("Login error:", error);
//       alert("Login failed: " + error.message);
//     }
//     await (<Link href={"./Dashboard"}></Link>);
//   };

//   return (
//     <>
//       <Head>
//         <title>Login 04</title>
//         <meta charSet="utf-8" />
//         <meta
//           name="viewport"
//           content="width=device-width, initial-scale=1, shrink-to-fit=no"
//         />
//         <link
//           href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
//           rel="stylesheet"
//         />
//       </Head>

//       <section className="ftco-section">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-md-12 col-lg-10">
//               <div className="wrap d-md-flex">
//                 <div
//                   className="img"
//                   style={{
//                     backgroundImage:
//                       "url(https://w0.peakpx.com/wallpaper/621/30/HD-wallpaper-best-bad-boy-smoker-boy-smoke-boy-bad.jpg)",
//                   }}
//                 ></div>
//                 <div className="login-wrap p-4 p-md-5">
//                   <div className="d-flex">
//                     <div className="w-100">
//                       <h3 className="mb-4">Sign In</h3>
//                     </div>
//                     <div className="w-100">
//                       <p className="social-media d-flex justify-content-end">
//                         <a
//                           href="#"
//                           className="social-icon d-flex align-items-center justify-content-center"
//                         >
//                           <span className="fa fa-facebook"></span>
//                         </a>
//                         <a
//                           href="#"
//                           className="social-icon d-flex align-items-center justify-content-center"
//                         >
//                           <span className="fa fa-twitter"></span>
//                         </a>
//                       </p>
//                     </div>
//                   </div>
//                   <form onSubmit={handleSubmit} className="signin-form">
//                     <div className="form-group mb-3">
//                       <label className="label" htmlFor="name">
//                         Username
//                       </label>
//                       <input
//                         type="text"
//                         className="form-control"
//                         placeholder="Username"
//                         value={username}
//                         onChange={(e) => setUsername(e.target.value)}
//                         required
//                       />
//                     </div>
//                     <div className="form-group mb-3">
//                       <label className="label" htmlFor="password">
//                         Password
//                       </label>
//                       <input
//                         type="password"
//                         className="form-control"
//                         placeholder="Password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         required
//                       />
//                     </div>
//                     <div className="form-group">
//                       <button
//                         type="button"
//                         onClick={handleSubmit}
//                         className="form-control btn btn-primary rounded submit px-3"
//                       >
//                         Sign In
//                       </button>
//                     </div>
//                     <div className="form-group d-md-flex">
//                       <div className="w-50 text-left">
//                         <label className="checkbox-wrap checkbox-primary mb-0">
//                           Remember Me
//                           <input type="checkbox" checked />
//                           <span className="checkmark"></span>
//                         </label>
//                       </div>
//                       <div className="w-50 text-md-right">
//                         <a href="#">Forgot Password</a>
//                       </div>
//                     </div>
//                   </form>
//                   <p className="text-center">
//                     Dont Have an Account? Click Here{" "}
//                     <Link href={"/signup"}>
//                       {" "}
//                       <a href="#">Sign Up</a>
//                     </Link>
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Login;

"use client";
import React, { useState } from "react";
import Head from "next/head";
import "../styles/login.css";
import { FacebookAuth, login, signup } from "../config/firebase";

const Login = () => {
  // State variables for form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Perform login logic with username and password
    console.log({
      username,
      password,
    });

    try {
      const cheack = await login({
        email: username,
        password,
      });
       alert("login successfully");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed: " + error.message);
    }
  };

  // async function FacebookAuthButtonClicked() {
  //   try {
  //     const userCredential = await FacebookAuth();
  //     const user = userCredential.user;
  //     console.log("Facebook user:", user);
  //     alert("Logged in with Facebook successfully!");
  //     router.push("/dashboard");
  //   } catch (error) {
  //     console.error("Facebook login error:", error);
  //     alert("Facebook login failed: " + error.message);
  //   }
  // }

  async function FacebookAuthButtonClicked() {
    const user = await FacebookAuth();
    console.log("facebook user: ", user);
  }

  return (
    <>
      <Head>
        <title>Login 04</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Lato:300,400,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-10">
              <div className="wrap d-md-flex">
                <div
                  className="img"
                  style={{
                    backgroundImage:
                      "url(https://img.freepik.com/premium-photo/natures-organic-beauty-vibrant-autumn-leaf-showcasing-seasonal-transformation_795881-40316.jpg)",
                  }}
                ></div>
                <div className="login-wrap p-4 p-md-5">
                  <div className="d-flex">
                    <div className="w-100">
                      <h3 className="mb-4">Sign In</h3>
                    </div>
                    <div className="w-100">
                      <p className="social-media d-flex justify-content-end">
                        <a
                          href="#"
                          className="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-facebook"></span>
                        </a>
                        <a
                          href="#"
                          className="social-icon d-flex align-items-center justify-content-center"
                        >
                          <span className="fa fa-twitter"></span>
                        </a>
                      </p>
                    </div>
                  </div>
                  <form onSubmit={handleSubmit} className="signin-form">
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="name">
                        Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label className="label" htmlFor="password">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="button"
                        onClick={handleSubmit}
                        className="form-control btn btn-primary rounded submit px-3"
                      >
                        Sign In
                      </button>

                      <button
                        type="button"
                        onClick={FacebookAuthButtonClicked}
                        className="form-control btn btn-primary rounded submit px-3 mt-[10px]"
                      >
                        Login with Facebook
                      </button>
                    </div>
                    <div className="form-group d-md-flex">
                      <div className="w-50 text-left">
                        <label className="checkbox-wrap checkbox-primary mb-0">
                          Remember Me
                          <input type="checkbox" checked />
                          <span className="checkmark"></span>
                        </label>
                      </div>
                      <div className="w-50 text-md-right">
                        <a href="#">Forgot Password</a>
                      </div>
                    </div>
                  </form>
                  <p className="text-center">
                    Not a member? <a href="signup">Sign Up</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
