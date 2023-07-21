import React, { useRef } from "react";
import logo from "../../image/logo.png"
import Footer from "../others/Footer";
import { auth } from "../../firebase/firebase";
const SignIn = () => {

  const emailRef = useRef(null);
  const passwordRef = useRef(null); 
  const login= (e)=>
  {e.preventDefault();
    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value)
      .catch(error=>alert(error.message))
      .then(auth=>{ 
        // alert("Login Successful")
  })
      
  }
  const register= (e)=>
  {e.preventDefault();
    auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
    ).catch(error=>alert(error.message))
    .then(auth=>{

    })
  }
  return (
    <>
    <div className="SignIn md:pb-36 max-sm:bg-black">


      <div className="md:h-20 h-11 flex justify-start max-sm:bg-black">
        <img
          className="md:h-12 md:w-40 h-5 md:ml-10 md:mt-8 ml-3 mt-5 w-20 "
          
          src={logo}
          alt="Netflix Logo"
          />
      </div>

      <div class=" flex justify-center rounded-lg">
        <div className="md:p-16 max-sm:px-4 max-sm:py-4 w-96 items-center bg-black  md:opacity-80">
          <div>
            <h1 className="text-white text-3xl  mb-7 font-bold ">
              Sign In
            </h1>

            <div className="flex flex-col ">
              <input
              ref={emailRef}
                type="email"
                placeholder="Email or phone number "
                className="px-5 font-bold py-4 text-white mb-4 hover:text-black focus:outline-none hover:bg-[#E8F0FE] bg-[#333] rounded"
              />
              <input
              ref={passwordRef}
                type="password"
                className="px-5 py-4 mb-3 bg-[#333] font-bold rounded focus:outline-none text-white hover:bg-[#E8F0FE] hover:text-black"
                placeholder="Password"
                />
              <button onClick={login} className="text-lg md:mt-2 mt-6 mb-2 p-3 w-full rounded  bg-red-600 text-white font-black">
                Sign In
              </button>

              <div className="flex justify-between">
                <div className="text-white text-sm ">
                  <input type="checkbox" class="" />
                  <label for="bxid_rememberMe_true" data-uia="label+rememberMe">
                    <span class="p-1">Remember me</span>
                  </label>
                  <div class=""></div>
                </div>
                <a class="text-white text-sm" href="/LoginHelp">
                  Need help?
                </a>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>
      {/* 324 * 190 */}
      <div className=" max-sm:bg-black p-4  h-96"> 
      <div className="flex ">
        <h3 className="texl-sm text-slate-300 p-1" > New to Netflix?</h3>
        <h2 className="text-lg text-white font-bold" onClick={register}>Sign up now</h2>

      </div>

        <p className="text-slate-300 p-1 text-sm">This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
    </div>
    </div>
    <div className="sm:hidden max-sm:hidden">

    <Footer/>
    </div>
    
                </>
  );
};

export default SignIn;
