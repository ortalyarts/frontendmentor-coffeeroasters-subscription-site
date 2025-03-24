'use client'

import { useState, useEffect } from "react";
import React from "react";
import Image from "next/image";

const CONTENT = 
    {
    locations: [
        {
          title: 'United Kingdom',
          content: `68 Asfordby Rd <br/> Alcaston <br/> SY6 1YA <br/> +44 1241 918425`, 
          svg: <svg width="42" height="50" xmlns="http://www.w3.org/2000/svg"><path d="M20.161.03c1.828-.286 1.245 1.417.453 2.237-.92.964-2.406 1.391-2.942 3.527 2.361 0 4.4.048 6.44-.013 2.619-.078 3.063.875 1.619 2.994-.712 1.05-1.117 2.32-1.898 3.303-1.514 1.894-1.48 3.189 1.003 4.072.625.222 1.43.778 1.589 1.342.687 2.435 2.247 4.318 3.88 6.148l.615.684c1.947 2.167 3.856 4.346 4.388 7.373.164.922-.008 1.403 1.264 1.295 1.834-.173 4.003-.195 4.514 2.144.492 2.23-1.1 3.65-2.803 4.828-.333.228-.552.608-.883 1.003.314 1.37 2.372.075 2.386 1.43.011 1.128-1.197 1.653-2.033 1.911-4.264 1.325-8.756 1.775-13.128 1.686-4.028-.088-7.189 2.198-10.922 2.74-1.061.158-2.034.68-3.761-.015 4-1.452 4.616-6.625 10.402-6.38-1.791-.745-2.541-1.083-3.316-1.367-2.33-.841-2.642-2.478-.903-4.372.98-1.064 1.658-2.206-.564-2.667-1.175-.242-.95-.735-.643-1.288l.098-.176c.211-.386.396-.79.131-1.152-.372-.511.85-.656 1.556-.567 2.089.27 5.041.63 4.23-2.422-.522-1.956-.827-5.872-4.689-5.364-3.655.48-4.802-.425-2.516-3.742-.392-.175-.91-.032-1.433.155l-.196.072c-1.207.449-2.352.95-1.918-1.89.025-.176-.32-.595-.39-.576-.841.267-1.741 2.33-2.463.45-.711-1.85 2.439-.955 2.514-3.197-.148-.478-2.834.292-1.878-1.028 1.908-2.633.586-3.801-1.028-5.031l-.244-.185-.123-.094-.246-.188-.123-.096c-.339-.264.003-.725.042-1.153 0-.008-.006-.022-.006-.03a.594.594 0 00-.086-.384c-.089-.06-.164-.091-.256-.153a.136.136 0 00.04-.05c.022-.008.047-.013.069-.022.097.07.1.145.153.225l.202.124c2.338 1.376 3.666.533 4.603-1.565.133-.312.261-.648.386-1.006C12.437.398 14.94.225 17.425.181l.604-.01.4-.007A13.248 13.248 0 0020.16.03zm-13 20.025l.147.003c2.725.15 2.856 2.692 3.934 4.045-.092 1.833-1.2 2.87-2.392 2.875-2.456.03-4.93-.395-7.372-.792-.561-.092-1.2-.68-1.14-1.528.123-1.555 4.865-4.725 6.97-4.6zM3.667 7.642c.216.341.33.636-.092.783-.08-.294-.017-.544.092-.783zM8.192.878c.75 2.536-1.542 3.378-2.261 4.964-.398.1-.798.208-1.195.31-.353.529-.844.984-1.067 1.49a5.448 5.448 0 00-.137-.202l-.098-.138a17.758 17.758 0 01-.05-.07l-.096-.14c-.389-.581-.59-1.149.95-1.3-.185-2.82 1.329-4.214 3.954-4.914z" fill="#0E8784" fillRule="nonzero"/></svg>
        },
        {
          title: 'Canada',
          content: '1528 Eglinton Avenue <br/>Toronto<br/> Ontario M4P 1A6 <br/>+1 416 485 2997', 
          svg: <svg width="52" height="50" xmlns="http://www.w3.org/2000/svg"><path d="M7.484 8.42l10.811 10.81 3.327-3.326 5.82 3.327-2.494 3.326-3.326 6.653 5.82 2.495 2.496 4.158 2.494-4.99-3.326-4.158 3.326-2.495 3.327 3.327 3.326-3.327 4.99 4.99v3.326l-4.99 3.327 5.821 2.495-.831 4.99h-6.653L33.264 50l-3.326-6.653-4.99-3.326-2.495 4.158-19.958-9.98L0 26.716l2.786-2.76-1.954-8.05L7.484 8.42zm41.58 37.422a.832.832 0 110 1.663h-1.663a.832.832 0 010-1.663h1.663zM50.728 34.2a.832.832 0 010 1.663h-1.664a.832.832 0 010-1.663h1.664zM32.432 9.252l7.485 5.82-1.663 4.99-2.495 1.664-2.495-1.664v-2.494l-2.495-3.327-1.321.565-3.322-2.416.604-2.717 5.702-.42zM15.8 4.262l6.653 6.653-4.306 1.726-5.673-5.053L15.8 4.261zM22.83.043l5.444.06v4.99l-4.99.832L20.79 3.43 22.83.044z" fill="#0E8784" fillRule="nonzero"/></svg>
        },
        {
          title: 'Australia',
          content: " 36 Swanston Street <br/> Kewell <br/> Victoria <br/> +61 4 9928 3629", 
          svg: <svg width="49" height="44" xmlns="http://www.w3.org/2000/svg"><path d="M40.967 39.325c.273 0 .468.253.401.517l-.848 3.36a.99.99 0 01-1.517.58 18.332 18.332 0 01-4.067-3.79.413.413 0 01.324-.667zM36.746.215a.317.317 0 01.57-.04c.51.889 1.42 2.776 1.42 4.979l.499-.362a.315.315 0 01.437.062l1.09 1.427a.34.34 0 01.061.222c-.072.77-.272 5.015 3.435 6.716a.312.312 0 01.154.15l4.525 9.1c.02.047.03.093.03.145v3.831c0 .584-.246 1.138-.683 1.526-1.774 1.582-6.412 5.971-6.695 9.011a.314.314 0 01-.313.285H33.3a.303.303 0 01-.149-.036c-.514-.28-3.229-3.857-3.78-7.327a.315.315 0 00-.544-.16l-1.784 1.985a.863.863 0 01-.648.29.558.558 0 01-.55-.465c-.206-1.21-1.121-4.375-4.957-4.375-2.057 0-5.26.797-8.232 1.696 0 0-3.29 1.034-5.722 4.343a.442.442 0 01-.36.181H4.569a.454.454 0 01-.447-.522c.483-3.092-.869-6.261-2.324-9.177-.591-1.184-1.193-2.327-1.697-3.408a1.112 1.112 0 01-.072-.718l.92-3.857c.088-.373.366-.673.73-.786l.295-.095.342-.114c2.43-.826 7.673-2.944 8.187-5.929a.31.31 0 01.092-.17l5.363-5.196a.319.319 0 01.468.03c.504.637 1.908 2.053 3.995 1.355l-.648-.656a.317.317 0 01.006-.455l2.452-2.327a.302.302 0 01.216-.088h7.476a.32.32 0 01.247.522L27.769 4.74a.321.321 0 00.072.47l2.695 1.77.515.337 1.674 1.099a1.483 1.483 0 002.19-.677c.396-.967.767-2.472.772-4.71 0-.037.005-.078.02-.114z" fill="#0E8784" fillRule="nonzero"/></svg>
        }
      ]
    }

export default function AboutUs (){

    const[width, setWidth] = useState(0);
    const[imgSrc, setImgSrc] = useState('desktop');
    
    // Switching images between lanscape / portrait for mobile / desktop
    function handleResize(){
        setWidth(window.innerWidth)
    }
    useEffect(() => {
        // Ensure window exists (for Next.js SSR)
        if (typeof window === "undefined") return;

        // Set initial width
        setWidth(window.innerWidth);
        handleResize(); // Call on mount
    
        window.addEventListener("resize", handleResize);
        
        return () => window.removeEventListener("resize", handleResize);
      }, []);

    useEffect(() => {
        if(width <= 697){
            setImgSrc('mobile')
        } else if(width > 697 && width < 1120){
            setImgSrc('tablet')
        }
        else if(width >= 1120) {
            setImgSrc('desktop')
        }
    }, [width])
    


    return (
    <main>
        <section className="hero hero-about-us">
            
          <h1 className="title-1">About us</h1>
          <p className="hero-text">
            Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of 
            coffee from around the world. We have since been dedicated to bring the perfect cup - from 
            bean to brew - in every shipment.
          </p>
        </section>
        <section className="our-commitment">
            {imgSrc==='desktop' &&
            <Image className="round-corners" src={`/assets/about/desktop/image-commitment.jpg`}  width={445} height={520} alt="our commitment" />
            }
            {imgSrc==='tablet' &&
            <Image className="round-corners" src={`/assets/about/tablet/image-commitment.jpg`}  width={281} height={470} alt="our commitment" />
            }
            {imgSrc==='mobile' &&
            <Image className="round-corners" src={`/assets/about/mobile/image-commitment.jpg`}  width={327} height={400} alt="our commitment" />
            }
            {/* <Image className="round-corners" src={`/assets/about/${imgSrc.src}/image-commitment.jpg`}  width={imgSrc.width} height={imgSrc.height} alt="our commitment" /> */}
            <div className="title-text-holder">
                <h1 className="title-3">Our commitment</h1>
                <p className="body-text">
                We&apos;re built on a simple mission and a commitment to doing good along the way. We want to 
                make it easy for you to discover and brew the world&apos;s best coffee at home. It all starts 
                at the source. To locate the specific lots we want to purchase, we travel nearly 60 days 
                a year trying to understand the challenges and opportunities in each of these places.
                We collaborate with exceptional coffee growers and empower a global community of farmers 
                through with well above fair-trade benchmarks. We also offer training, support farm community 
                initiatives, and invest in coffee plant science. Curating only the finest blends, we roast 
                each lot to highlight tasting profiles distinctive to their native growing region.
                </p>
          </div>
        </section>

        <section className="grey-holder round-corners">        
        {imgSrc==='desktop' &&
            <Image className="round-corners" src={`/assets/about/desktop/image-quality.jpg`}  width={445} height={474} alt="Coup of coffe with heart" />
            }
            {imgSrc==='tablet' &&
            <Image className="round-corners" src={`/assets/about/tablet/image-quality.jpg`}  width={573} height={320} alt="Coup of coffe with heart" />
            }
            {imgSrc==='mobile' &&
            <Image className="round-corners" src={`/assets/about/mobile/image-quality.jpg`}  width={279} height={156} alt="Coup of coffe with heart" />
            }
            <div className="title-text-holder">
                <h2 className="title-3">
                Uncompromising quality
                </h2>
                <p className="body-text">
                Although we work with growers who pay close attention to all stages of harvest and processing, 
                we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the 
                coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast 
                consistent, user-friendly coffee, so that brewing is easy and enjoyable.
                </p>
            </div>
            
        </section>

        <section className="how-works locations">
          <h2 className="how-works-title">
          Our headquarters
          </h2>
          <ul className="items">
            {CONTENT.locations.map((item) => (
              <li key={item.title} className="item">   
              <div className="item-content">
                <h3 className="title-2">
                  <span className="item-svg">
                    {item.svg}
                  </span>
                  {item.title}</h3>
                {/* <p className="body-text">
                  {item.content}
                </p> */}
                <p>
                    {item.content.split("<br/>").map((line, index) => (
                    <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                </p>
              </div>
            </li>
            ))} 
          </ul>
        </section>
    </main>
    )
}