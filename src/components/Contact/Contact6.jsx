import React from "react";
import { IoLocationSharp, IoMail, IoCall } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";

const Contact6 = () => {
  return (
    <section className="contact-section section bg-light-alt">
      <div className="container">
        {/* <div className="row justify-content-center text-center mb-5">
          <div className="col-lg-6">
            <span className="subtitle text-primary">Contact Us</span>
            <h2 className="title">Let's Start a Conversation</h2>
            <p className="text-muted">
              Have questions? We're here to help and would love to hear from
              you.
            </p>
          </div>
        </div> */}

        <div className="text-center mb-5">
          {/* <span className="px-3 py-2 rounded-pill bg-primary text-white mb-2 d-inline-block">
            Our Services
          </span> */}
          <h4 className="display-6 mb-3">
          Feel free to contact us
          </h4>
        </div>

        <div className="row align-items-stretch">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="contact-info h-100  text-white p-4 rounded-3" >
              <h3 className="mb-4 text-light box-heading">Contact Information</h3>
              <div className="info-item px-4 py-5 mb-4 bg-light">
                <h5 className="text-dark">Get in touch with us</h5>
                <p className="text-muted mt-2">Reach out for personalized assistance, inquiries, or support. Our team is here to help with any questions or concerns about our payment resolution solutions.</p>
              </div>
              <div className="info-item px-4 py-5 mb-4 bg-light">
                <h5 className="text-dark">Get in touch with us</h5>
                <p className="text-muted mt-2">Reach out for personalized assistance, inquiries, or support. Our team is here to help with any questions or concerns about our payment resolution solutions.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="contact-form bg-white p-4 rounded-3 shadow h-100">
              <h3 className="mb-4">Send us a Message</h3>
              <form name="contactForm" method="post" action="contact.php">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Your Message"
                        style={{ height: "150px" }}
                        required
                      ></textarea>
                      <label htmlFor="message">Your Message</label>
                    </div>
                  </div>
                  <div className="col-12">
                    {/* <button
                      type="submit"
                      className="btn btn-primary btn-lg px-5"
                    >
                      Send Message
                    </button> */}
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg rounded-pill px-5 hover-scale"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .contact-info{
            background-image:url("https://cdn.prod.website-files.com/66641e6a28c1d34ca25d0087/666eecb493727f019bd6d5b3_Rectangle%2034625564-p-500.webp");
            background-size:cover;
            position:relative;
            z-index:2;
            border-radius:20px;
            overflow:hidden;
        }
            .contact-info::after{
                content:"";
                position:absolute;
                height:100%;
                width:100%;
                top:0;
                background:#181818;
                display:block;
                left:0;
                opacity:0.8;
                z-index:1;
                // border-radius:20px;
            }
            .info-item, .box-heading{
                position:relative;
                z-index:2
            }
      `}</style>
    </section>
  );
};

export default Contact6;
