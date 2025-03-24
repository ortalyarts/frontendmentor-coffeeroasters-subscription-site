import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AccordionItem ({item, selectedOptions, handleSelectionChange}){

    const [isExpanded, setIsExpanded] = useState(false);

    function toggleAccordion (){
        setIsExpanded((prevState) => !prevState);
    }

    return (
        <>   
        {selectedOptions.preferences === 'Capsule' & item.id === 'grid-option' ?
            // Disable 'grind option' if the user selects 'Capsule'
            <button className='btn-accordion' type="button" disabled>
                {item.question}
            </button>
        :
            <button className={`btn-accordion ${isExpanded && 'expanded'}`} type="button" 
                aria-haspopup="true" aria-expanded={isExpanded}
                onClick={toggleAccordion}>
                {item.question}
            </button>
        }

            <AnimatePresence>
            {
                isExpanded &&
                
                <motion.div className="options-holder"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                >
                    <fieldset className="accordion-options">
                    {item.options.map((option, index) => {
                        const uniqueId = `${item.id}-${option.title.replace(/\s+/g, "-").toLowerCase()}`;
                        const isChecked = selectedOptions[item.id]?.includes(option.title) || false;
                        return (
                            <React.Fragment key={uniqueId}>
                            <label htmlFor={uniqueId} className="accordion-item round-corners">
                                <input
                                    className="sr-only"
                                    type="radio"
                                    id={uniqueId} // Assign unique ID
                                    name={item.id} // Use the item id as name for grouping
                                    value={option.title}
                                    checked={isChecked}
                                    onChange={() => handleSelectionChange(item.id, option.title)}
                                />
                                <span className="option-title">{option.title}</span>
                                <span className="option-desc">{option.desc}</span>
                            </label> 
                            </React.Fragment>
                        );
                    }
                    
                    )} 
                </fieldset>
            </motion.div>
        }
        </AnimatePresence>
    </>
    )
}