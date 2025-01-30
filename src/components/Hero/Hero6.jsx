import React from 'react'
import hero6 from "./../../assets/images/hero6banner.webp"

const Hero6 = () => {
  return (
    <section class="py-16 ">
    <div class="container banner">
        <div className="row py-5">
            <div class="col-lg-6">
                <div className="d-flex flex-column align-item-center justify-content-center h-100">
                    <h1 class=" font-bold text-gray-800">
                    Grow with our Email marketing &amp; CRM suite
                    </h1>
                    <p class="mt-4 text-dark">
                    All-in-one platform to manage your customer relationships via Email, SMS, Chat and more
                    </p>
                    <a class="mt-5 btn1 bg-green-600 text-light bg-primary px-5 py-3 rounded-md" href="#">
                    Sign up free
                    </a>
                </div>
                
            </div>
            <div class="col-lg-6 ">
                <figure className='py-5'>
                    <img alt="Platform screenshot" height={"300px"} class="" src={hero6}/>
                </figure>
            </div>
        </div>
    
    </div>
    <style jsx>{`
        .btn1{
            width:fit-content;
            border-radius:10px;
            transition:all .3s linear
        }
        .btn1:hover{
            transform: scale(1.1);
        }
        .banner h1{
            font-size:50px
        }
     `}</style>
   </section>
  )
}

export default Hero6