import React from 'react';

const Link  = ({href, className, children}) =>{
    const onClick = (event)=>{
        if(event.metaKey || event.ctrlKey){
            return;
        }
        event.preventDefault();
        window.history.pushState({},'', href);
        const newEvent = new PopStateEvent('popstate1');
        window.dispatchEvent(newEvent);
    }

    return(
        <a onClick={onClick} className={className} href={href}>{children}</a>
    )
}

export default Link;