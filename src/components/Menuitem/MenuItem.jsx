import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, price,tags}) => (
        <>
            <div className="wine-details">
                <div className="wine-title">
                   <p className='p__cormorant' style={{color: '#DCCA87'}}>{title}</p>
                </div>
                <div className="line-price">
                <div className='line'>&nbsp;</div>
                <span className='price'>{price}</span>
                </div>
            </div>
            <div className="wine-tags">
                   <p className='tags' style={{color: '#AAA'}}>{tags}</p>
            </div>
        </>
);

export default MenuItem;
