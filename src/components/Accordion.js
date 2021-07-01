import React, {useState} from 'react';

const Accordion = ({items}) =>{

    const [activeIndex, setActiveIndex] = useState(null)
    const onCicked = (index) =>{
        setActiveIndex(index)
    };
    
    const renderdItem = items.map((item, index)=>{
        const active= index  ===activeIndex ? 'active' : ''
        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={()=>onCicked(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return <div className="ui styled accordion">
        {renderdItem}
    </div>
}

export default Accordion;