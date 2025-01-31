import React from "react";
import { Container } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products6 = () => {
  const products = [
    {
      title: "Financial Planning",
      description:
        "Comprehensive financial planning tailored to your goals and future aspirations.",
      icon: "💰",
      list:[
        "best seller",
        "best promoter",
        "best seller",
        "best promoter",
        "best seller",
        "best promoter"
    ]
    },
    {
      title: "Investment Strategy",
      description:
        "Expert investment advice and portfolio management to maximize your returns.",
      icon: "📈",
      list:[
        "best seller",
        "best promoter",
        "best seller",
        "best promoter",
        "best seller",
        "best promoter"
    ]
    },
    {
      title: "Risk Management",
      description:
        "Protect your assets and minimize risks with proven strategies.",
      icon: "🛡️",
      list:[
        "best seller",
        "best promoter",
        "best seller",
        "best promoter",
        "best seller",
        "best promoter"
    ]
    },
    {
        title: "Financial Planning",
        description:
          "Comprehensive financial planning tailored to your goals and future aspirations.",
        icon: "💰",
        list:[
            "best seller",
            "best promoter",
            "best seller",
            "best promoter",
            "best seller",
            "best promoter"
        ]
      },
      {
        title: "Investment Strategy",
        description:
          "Expert investment advice and portfolio management to maximize your returns.",
        icon: "📈",
        list:[
            "best seller",
            "best promoter",
            "best seller",
            "best promoter",
            "best seller",
            "best promoter"
        ]
      },
  ];

 

  return (
    <section className="products-section section bg-light-alt">
      <Container>
        <div className="text-center mb-5">
          {/* <span className="px-3 py-2 rounded-pill bg-primary text-white mb-2 d-inline-block">
            Our Services
          </span> */}
          <h4 className="display-6 mb-3">
            Solutions That Drive Success
          </h4>
        </div>

        <div className="products-slider row justify-content-center">
          {products.map((product, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="service-card">
                <div className="service-card-header">
                 
                  <h3 className="h5  mt-3 d-flex align-item-center justify-content-between">{product.title}  <span className="service-icon">{product.icon}</span></h3>
                </div>
                <div className="service-card-body">
                  <p className="text-muted">{product.description}</p>
                  <ul className="productlist">
                    {product.list.map((item,itemindex)=>(
                        <li key={itemindex}>{item}</li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="btn btn-primary w-100 rounded-pill d-inline-flex align-items-center justify-content-center"
                  >
                    Learn More <FaArrowRight className="ms-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      <style jsx>{`
        .products-section {
          // background: linear-gradient(135deg, #e3f2fd, #f1f8e9);
          padding: 60px 0;
     
        }
        .products-slider {
            gap:30px 0
        }
        .products-slider .slick-dots {
          bottom: -30px;
        }
        .products-slider .slick-dots li button:before {
          // color: var(--bs-primary);
          font-size: 10px;
        }
        .products-slider .slick-dots li.slick-active button:before {
          // color: var(--bs-primary);
        }
        .service-card {
          background: white;
          border-radius: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          padding: 20px;
          display: flex;
          flex-direction: column;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border-radius:32px 0px 32px 0px;
          border:1px solid #bfbfbf6e
        }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }
        .service-card-header .service-icon {
          font-size: 30px;
          color: var(--bs-primary);
        }
        .service-card-body {
          margin-top: 15px;
          flex: 1;
        }
        .btn {
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
        }
        .btn:hover {
          background-color: var(--bs-primary);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        .slick-initialized .slick-slide {
          padding: 10px;
        }
        .productlist{
            margin-top:18px;
            display:flex;
            gap: 10px 0;
            flex-direction: column;
            justify-content: center;
            align-content: center;
            align-items: center;
            margin-bottom:18px;
            
        }
        .productlist li{
            list-style: decimal;
        }
      `}</style>
    </section>
  );
};

export default Products6;
