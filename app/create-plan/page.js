'use client'
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";

import AccordionItem from "@/components/accordionItem";
import Modal from "@/components/modal";

const CONTENT = {

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
  ],

  availableOptions: [
    {
        topic: 'Preferences',
        id: 'preferences',
        question: 'How do you drink your coffee?',
        options: [
            {
                title: 'Capsule',
                desc: 'Compatible with Nespresso systems and similar brewers'
            },
            {
                title: 'Filter',
                desc: 'For pour over or drip methods like Aeropress, Chemex, and V60'
            },
            {
                title: 'Espresso',
                desc: 'Dense and finely ground beans for an intense, flavorful experience'
            }
        ]
    },
    {
        topic: 'Bean type',
        id: 'bean-type',
        question: 'What type of coffee?',
        options: [
            {
                title: 'Single origin',
                desc: 'Distinct, high quality coffee from a specific family-owned farm'
            },
            {
                title: 'Decaf',
                desc: 'Just like regular coffee, except the caffeine has been removed'
            },
            {
                title: 'Blended',
                desc: 'Combination of two or three dark roasted beans of organic coffees'
            }
        ]
    },
    {
        topic: 'Quantity',
        id: 'quantity',
        question: 'How much would you like?',
        options: [
            {
                title: '250g',
                desc: 'Perfect for the solo drinker. Yields about 12 delicious cups.'
            },
            {
                title: '500g',
                desc: 'Perfect option for a couple. Yields about 40 delectable cups.'
            },
            {
                title: '1000g',
                desc: 'Perfect for offices and events. Yields about 90 delightful cups.'
            }
        ]
    },
    {
        topic: 'Grid Option',
        id: 'grid-option',
        question: 'Want us to grind them?',
        options: [
            {
                title: 'Wholebean',
                desc: 'Best choice if you cherish the full sensory experience'
            },
            {
                title: 'Filter',
                desc: 'For drip or pour-over coffee methods such as V60 or Aeropress'
            },
            {
                title: 'Cafetiére',
                desc: 'Course ground beans specially suited for french press coffee'
            }
        ]
    },
    {
        topic: 'Deliveries',
        id: 'deliveries',
        question: 'How often should we deliver?',
        options: [
            {
                title: 'Every week',
                desc: '$14.00 per shipment. Includes free first-class shipping.'
            },
            {
                title: 'Every 2 weeks',
                desc: '$17.25 per shipment. Includes free priority shipping.'
            },
            {
                title: 'Every month',
                desc: '$22.50 per shipment. Includes free priority shipping.  '
            }
        ]
    }
  ]
  }

function shipmentCalc (weight, freq){
    
    let singleShipment = 0;
    let monthCost = 0;

    let multipl = 1; // delivery once a month
    if(freq === 'Every 2 weeks'){ multipl = 2};
    if(freq === 'Every week'){ multipl = 4};

    if(weight === '250g'){
        singleShipment = 12.00;
        if (multipl === 2){ singleShipment = 9.60 }
        if (multipl === 4){ singleShipment = 7.20 }
        monthCost = singleShipment * multipl;
        
    } else if(weight === '500g'){
        singleShipment = 22.00;
        if (multipl === 2){ singleShipment = 17.50 }
        if (multipl === 4){ singleShipment = 13.00 }
        monthCost = singleShipment * multipl;
    } else {
        singleShipment = 42.00;
        if (multipl === 2){ singleShipment = 32.00 }
        if (multipl === 4){ singleShipment = 22.00 }
        monthCost = singleShipment * multipl;
    }
    return `$${monthCost.toFixed(2)}`;
}

export default function CreatePlane (){
    const [selectedOptions, setSelectedOptions] = useState({});
    const [isAllSelected, setIstAllSelected] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect (() => {
        handleValidate();
    }, [selectedOptions, handleValidate]);

    function handleCloseModal() {
        setModalIsOpen(false);
    }
    function handleOpenModal() {
        setModalIsOpen(true);
    }
    const handleSelectionChange = (category, optionTitle) => {
        setSelectedOptions((prev) => ({
          ...prev,
          [category]: optionTitle, // Store only one selected option per category
        }));
      };

    function handleValidate (){
        let allCategories = CONTENT.availableOptions.map((item) => item.id);
        if(selectedOptions.preferences === 'Capsule'){
            // ignore 'Grinding option' in validation if the user selects 'Capsule'
            allCategories = allCategories.filter(topic => topic !== 'grid-option');
        }
        const isValid = allCategories.every((category) => selectedOptions[category]);

        if (!isValid) {
            setIstAllSelected(false);
            return;
        } else {
            setIstAllSelected(true);
        }

    }
    // Validate before submission
    const handleSubmit = (event) => {
        event.preventDefault();

        // Process the form (e.g., send to API)
        handleOpenModal();
        // alert(shipmentCalc(selectedOptions.quantity, selectedOptions.deliveries));
    };

    const summary = <p className="text-summary">
        “I drink my coffee  
        {selectedOptions.preferences === 'Capsule' ? ' using' : ' as'}
        <span> {selectedOptions.preferences? selectedOptions.preferences : '_____'}</span>, 
        with a <span>{selectedOptions['bean-type']? selectedOptions['bean-type'] : '_____'}</span> type of bean. 
        <span> {selectedOptions.quantity? selectedOptions.quantity : '_____'} </span> 
        {selectedOptions.preferences === 'Capsule' ? ' ' : ' ground ala '}
        <span>{selectedOptions['grid-option']? selectedOptions['grid-option'] : '_____'}</span>,
        sent to me <span>{selectedOptions.deliveries? selectedOptions.deliveries : '_____'}</span>.”
    </p>

    return (
              <main>

                <Modal open={modalIsOpen} onClose={handleCloseModal}>
                    <div className="modal-summary-holder round-corners">
                        <h2 className="modal-summary-title" tabIndex="-1" autoFocus>
                            Order Summary
                        </h2>
                        <div className="summery-text-holder">
                            {summary}
                            
                            <p className="little-text">
                                Is this correct? You can proceed to checkout or go back to plan selection if something is off. Subscription discount codes can also be redeemed at the checkout. 
                            </p>
                            <div className="price-holder">                            
                                <p className="price">
                                    {shipmentCalc(selectedOptions.quantity, selectedOptions.deliveries)} / mo
                                </p>
                                <button className="btn-main" onClick={handleCloseModal}><span>Checkout</span></button>
                            </div>
                        </div>
                    </div>
                </Modal>

                <section className="hero hero-create-plan">
                  <h1 className="hero-title">Create a plan</h1>
                  <p className="hero-text">
                  Build a subscription plan that best fits your needs. We offer an assortment of the best 
                  artisan coffees from around the globe delivered fresh to your door.
                  </p>                  
                </section>
        
                <section className="how-works steps round-corners" aria-label="Quick navigation between your settings">
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
                </section>

                <section className="available-options" aria-label="Select your preferences">
                  <ul className="items" aria-label="Quick navigation through the Topics">
                    {CONTENT.availableOptions.map((item, index) => (
                      <li key={item.topic} className="item">   
                            <Link href={`#topic-${index + 1}`} className="btn-options">
                                <span>0{index + 1}</span>{item.topic}
                            </Link>
                    </li>
                    ))} 
                  </ul>

                  <form onSubmit={handleSubmit}>
                  <ul className="accordion" >
                    {CONTENT.availableOptions.map((item, index) => (
                        <li id={`topic-${index + 1}`} key={item.question} className="accordion-item"> 
                            <AccordionItem item={item} selectedOptions={selectedOptions} handleSelectionChange={handleSelectionChange}></AccordionItem>
                        </li>
                    ))} 
                  </ul>
                  <section className="summary round-corners">
                    <h2 className="title-summary">Order Summary</h2>
                    {summary}
                </section>
                  <button className="btn-main" disabled={!isAllSelected} type="submit">Create your plan</button>                    

                  </form>
                </section>
        
              </main> 
    )
}