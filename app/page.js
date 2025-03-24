import Image from "next/image";
import Link from "next/link";

const CONTENT = {
  collection: [
    {
      title: 'Gran Espresso',
      content: 'Light and flavorful blend with cocoa and black pepper for an intense experience', 
      img: '/assets/home/desktop/image-gran-espresso.png'
    },
    {
      title: 'Planalto',
      content: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
      img: '/assets/home/desktop/image-planalto.png'
    },
    {
      title: 'Piccollo',
      content: 'Mild and smooth blend featuring notes of toasted almond and dried cherry',
      img: '/assets/home/desktop/image-piccollo.png'
    },
    {
      title: 'Danche',
      content: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
      img: '/assets/home/desktop/image-danche.png'
    },
],
whyUs: [
  {
    title: 'Best quality',
    content: "Discover an endless variety of the world's best artisan coffee from each of our roasters.", 
    img: '/assets/home/desktop/icon-coffee-bean.svg'
  },
  {
    title: 'Exclusive benefits',
    content: "Special offers and swag when you subscribe, including 30% off your first shipment.", 
    img: '/assets/home/desktop/icon-gift.svg'
  },
  {
    title: 'Free shipping',
    content: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.", 
    img: '/assets/home/desktop/icon-truck.svg'
  }
],
howWorks: [
  {
    title: 'Pick your coffee',
    content: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.", 
    num: '01'
  },
  {
    title: 'Choose the frequency',
    content: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.", 
    num: '02'
  },
  {
    title: 'Receive and enjoy!',
    content: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.", 
    num: '03'
  }
]
}

export default function Home() {
  return (
      <main>
        <section className="hero hero-home">
          <h1 className="hero-title">Great coffee made simple.</h1>
          <p className="hero-text">
            Start your mornings with the world&apos;s best coffees. Try our expertly curated artisan 
            coffees from our best roasters delivered directly to your door, at your schedule.
          </p>
          <Link href="/create-plan" className="btn-main">Create your plan</Link>
        </section>

        <section className="our-collection">
          <h2 className="our-collection-title">
            our collection
          </h2>
          <ul className="items">
            {CONTENT.collection.map((item) => (
              <li key={item.title} className="item">
              <Image src={item.img} alt={item.title} width='255' height='193'></Image>
              <div className="item-content">
                <h3 className="title-3">{item.title}</h3>
                <p className="body-text">
                  {item.content}
                </p>
              </div>
            </li>
            ))} 
          </ul>
        </section>

        <section className="why-us">
          <h2 className="why-us-title">
            Why choose us?
          </h2>
          <p className="hero-text">
          A large part of our role is choosing which particular coffees will be featured 
          in our range. This means working closely with the best coffee growers to give 
          you a more impactful experience on every level.
          </p>
          <ul className="items">
            {CONTENT.whyUs.map((item) => (
              <li key={item.title} className="item">
              <Image src={item.img} alt={item.title} width='72' height='72'></Image>
              <div className="item-content">
                <h3 className="title-3">{item.title}</h3>
                <p>
                  {item.content}
                </p>
              </div>
            </li>
            ))} 
          </ul>
          <div className="grey-background"></div>
        </section>

        <section className="how-works">
          <h2 className="how-works-title">
          How it works
          </h2>
          <ul className="items">
            {CONTENT.howWorks.map((item) => (
              <li key={item.title} className="item">   
              <div className="item-content">
                <h3 className="title-2">
                  <span className="item-number">
                    {item.num}
                  </span>
                  {item.title}</h3>
                <p className="body-text">
                  {item.content}
                </p>
              </div>
            </li>
            ))} 
          </ul>
          <Link href="/create-plan" className="btn-main">Create your plan</Link>
        </section>

      </main> 
  );
}
