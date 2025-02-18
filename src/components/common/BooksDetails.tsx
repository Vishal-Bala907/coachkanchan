import Image from "next/image";
import React from "react";
import img from "@/assets/img/testimonial/book.jpeg";
import { FaAmazon, FaShoppingCart } from "react-icons/fa"; // Amazon Icon
import { SiFlipkart } from "react-icons/si"; // Flipkart Icon
// import "bootstrap/dist/css/bootstrap.min.css";

const BookDetails = () => {
  return (
    <div
      className="container mt-5"
      style={{
        marginTop: "5rem !important",
      }}
    >
      <div className="card text-light bg-dark shadow-lg border-0">
        <div className="row g-0">
          {/* Book Image */}
          <div
            className="col-md-4 d-flex justify-content-center align-items-center"
            style={{
              backgroundColor: "#f7f7f7",
            }}
          >
            <Image
              src={img}
              className="img-fluid rounded-start"
              alt="Book Cover"
            />
          </div>

          {/* Book Details */}
          <div className="col-md-8">
            <div className="card-body">
              <h2 className="card-title fw-bold text-warning">
                HOW TO STOP WORRYING AND START HELPING
              </h2>

              {/* About the Book */}
              <h5 className="text-primary mt-3">About the Book</h5>
              <p className="card-text text-light">
                <strong>How to Stop Worrying and Start Helping</strong> is a
                transformative guide for parents, teachers, and students aged
                14-25. Combining the wisdom of resilience, habit-building, and
                emotional intelligence, this book provides actionable strategies
                to mentor learners toward academic success. With real-life
                examples, personalized tips, and the groundbreaking &quot;GPS
                System for Academic Success,&quot; Dr. Kabra offers a roadmap to
                not only navigate challenges but to thrive in them. Whether
                you’re guiding a struggling student or aiming for personal
                growth, this book is your ultimate companion.
              </p>

              {/* About the Author */}
              <h5 className="text-primary mt-4">About the Author</h5>
              <p className="card-text text-light">
                <strong>Dr. Kanchan Kabra</strong> is a resilience mindset
                coach, transformational speaker, and educator with over 20 years
                of experience inspiring students, parents, and teachers to
                overcome academic and life challenges. A Ph.D. achiever who
                restarted her own education at 30, Dr. Kabra’s journey
                exemplifies the power of grit and determination. She has
                empowered thousands through her coaching, workshops, and
                practical strategies rooted in positivity and gratitude.
              </p>
              {/* Buy Now Buttons */}
              <div className="d-flex gap-3 mt-4">
                <a
                  href="https://www.amazon.in/dp/9348518100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-warning fw-bold d-flex align-items-center gap-2"
                >
                  <FaAmazon size={20} />
                  Buy on Amazon
                </a>

                <a
                  href="https://www.flipkart.com/stop-worrying-start-helping/p/itm8eabb90dbd0bd?pid=RBKH8SFKTUYJ6SS6&lid=LSTRBKH8SFKTUYJ6SS6T7W6TQ&marketplace=FLIPKART&q=+HOW+TO+STOP+WORRYING+AND+START+HELPING&store=bks&srno=s_1_3&otracker=search&otracker1=search&fm=organic&iid=31972372-859d-477e-bc5b-118103431556.RBKH8SFKTUYJ6SS6.SEARCH&ppt=hp&ppn=homepage&ssid=y46vfpx51c0000001739860386016&qH=31c50d43fe99722a"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary fw-bold d-flex align-items-center gap-2"
                >
                  <SiFlipkart size={20} />
                  Buy on Flipkart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
