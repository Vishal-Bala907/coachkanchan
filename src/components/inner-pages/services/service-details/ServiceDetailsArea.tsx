"use client";
import { useEffect, useState } from "react";
import style from "./Service.module.css";
import { toast } from "react-toastify";
import { getCourseById } from "@/components/server/admin/courses";
import { createPayment, varifyPayment } from "../../../server/common/payment";
import DiscussSpinner from "@/components/spinners/DiscussSpinner";

type CourseState = {
  title: string;
  shortDec: string | null;
  longDec: string;
  image: string | null;
  price: string;
  offerPrice: string;
};

const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true);
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

const ServiceDetailsArea = ({ id }: any) => {
  console.log(id);

  const [course, setCourse] = useState<CourseState>({
    title: "",
    shortDec: "null",
    longDec: "null",
    image: "null",
    price: "",
    offerPrice: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  // const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    getCourseById(id)
      .then((data) => {
        if (data.course) {
          // console.log(data);
          setCourse(data.course);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handlePayment = async () => {
    try {
      // setLoading(true);
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        toast.error("Failed to load Razorpay. Please try again.");
        return;
      }

      const order = await createPayment({
        amount: +course.offerPrice * 100, // Convert to paisa
        currency: "INR",
      });

      const user = localStorage.getItem("user");
      const USER = user ? JSON.parse(user) : { name: "", email: "" };

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Kanchan Mindset Coach",
        description: "Payment for Order",
        order_id: order.id,
        handler: async function (response: any) {
          try {
            const verifyRes = await varifyPayment({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              amount: +course.offerPrice,
              userId: USER._id,
              courseId: id,
            });

            if (verifyRes.success) {
              toast.success("Payment Successful!");
            } else {
              toast.error("Payment Verification Failed");
            }
          } catch (error) {
            toast.error("Error verifying payment!");
            console.error(error);
          }
        },
        prefill: {
          name: USER.email,
          email: USER.email,
          contact: USER.phone,
        },
        theme: {
          color: "#14b2f1",
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error("Error in payment:", error);
      toast.error("Payment Failed!");
    } finally {
      // setLoading(false);
    }
  };

  if (loading) {
    return <DiscussSpinner />;
  }

  return (
    <>
      <main className={`${style.mainArea}`}>
        <section
          className={`${style.primarySection} justify-content-center  justify-content-lg-between`}
        >
          <img
            src={`${process.env.NEXT_PUBLIC_BASE_URL}${course.image}`}
            className={`${style.image}`}
            width={300}
            height={200}
            alt=""
          />
          <div className={`${style.side}`}>
            <h3>{course.title}</h3>
            <p>
              <b>{course.shortDec}</b>
            </p>
            <div>
              <p style={{ margin: "25px 0px" }}>
                Actual Price
                {" : "}
                <em
                  style={{
                    textDecoration: "line-through",
                    color: "#ffe000",
                  }}
                >
                  &#8377; {course.price}
                </em>{" "}
              </p>
              <p style={{ margin: "25px 0px" }}>
                {" "}
                Offer Price{" : "}
                <strong
                  style={{
                    color: "#14b2f1",
                  }}
                >
                  &#8377; {course.offerPrice}
                </strong>
              </p>
            </div>
            <button onClick={handlePayment} className="btn btn-primary">
              Buy Now
            </button>
          </div>
        </section>
        <div
          style={{ margin: "20px 30px" }}
          dangerouslySetInnerHTML={{ __html: course.longDec }}
        />
      </main>
    </>
  );
};

export default ServiceDetailsArea;
