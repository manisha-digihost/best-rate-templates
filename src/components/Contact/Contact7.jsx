import React from "react";
import { IoLocationSharp, IoMail, IoCall } from "react-icons/io5";
import { LuClock4 } from "react-icons/lu";
import { FaLocationDot } from "react-icons/fa6";

const Contact7 = () => {
  return (
    <section className="contact-section section bg-light-alt">
      {/* <div className="container"> */}

      <div className="text-center mb-5">
        {/* <span className="px-3 py-2 rounded-pill bg-primary text-white mb-2 d-inline-block">
           Contact Us
          </span> */}
        <h2 className="display-5 fw-bold mb-3">Solutions That Drive Success</h2>
        <p className="text-muted lead mx-auto" style={{ maxWidth: "700px" }}>
          Discover our range of financial services designed to help you achieve
          your goals and secure your future
        </p>
      </div>

      <div className="row g-0">
        <div className="col-lg-6 mb-4 mb-lg-0 bg-dark ">
          <div className="py-5 d-flex  jucon h-100 align-item-center">
            <div className="contact-info h-100 bg-white  text-white p-4 w-80 ">
              <h3 className="mb-4 text-dark">Contact Information</h3>

              <div className="info-item d-flex mb-4">
                <IoLocationSharp className="contact-icon me-3 text-dark" size={24} />
                <div>
                  <h6 className="text-dark mb-1">Our Location</h6>
                  <p className="mb-0 text-dark-alt">
                    3481 Melrose Place, Beverly Hills
                  </p>
                </div>
              </div>

              <div className="info-item d-flex mb-4">
                <IoMail className="contact-icon me-3 text-dark" size={24} />
                <div>
                  <h6 className="text-dark mb-1">Email Address</h6>
                  <p className="mb-0 text-dark-alt">Info@example.com</p>
                </div>
              </div>

              <div className="info-item d-flex mb-4">
                <IoCall className="contact-icon me-3 text-dark" size={24} />
                <div>
                  <h6 className="text-dark mb-1">Phone Number</h6>
                  <p className="mb-0 text-dark-alt">(+1) 517 397 7100</p>
                </div>
              </div>

              <div className="info-item d-flex">
                <LuClock4 className="contact-icon me-3 text-dark" size={24} />
                <div>
                  <h6 className="text-dark mb-1">Working Hours</h6>
                  <p className="mb-0 text-dark-alt">
                    Monday - Friday: 8:00 AM - 4:00 PM
                    <br />
                    Saturday: 10:00 AM - 2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-6 bg-white">
          <div className="py-5 d-flex jmasg">
            <div className="contact-form  p-4 bg-dark shadow w-80">
              <h3 className="mb-4 text-white">Send us a Message</h3>
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
      {/* </div> */}
      <style jsx>{`
        .w-80 {
          width: 80%;
        }
        .jmasg {
          justify-content: start;
        }
        .jucon {
          justify-content: end;
        }
        @media (max-width: 786px) {
          .jmasg {
            justify-content: center;
          }
          .jucon {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Contact7;
