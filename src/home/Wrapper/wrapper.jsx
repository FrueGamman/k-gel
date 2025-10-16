import React from "react"
import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <i class='fa-solid fa-truck-fast'></i>,
      title: "Worldwide Delivery",
      decs: "For all oder over $99",
    },
    {
      cover: <i class='fa-solid fa-id-card'></i>,
      title: "Money Back Guarantee",
      decs: "If good have Problems",
    },
    {
      cover: <i class='fa-solid fa-shield'></i>,
      title: "Shop With Confidence ",
      decs: "100% secure payment",
    },
    {
      cover: <i class='fa-solid fa-headset'></i>,
      title: "Online Support 24/7",
      decs: "Dedicated support",
    },
  ]
  return (
    <>
      <section className='wrapper'>
        <div className='container grid lg:grid-cols-4'>
          {data.map((val, index) => {
            return (
              <div className='product bg-slate-50' key={index}>
                <div className='img icon-circle'>
                  <i className=" text-yellow-600">{val.cover}</i>
                </div>
                <h3 className="text-yellow-600">{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
