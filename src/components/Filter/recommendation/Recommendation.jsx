import React from 'react'
import Button from '../../ButtonComp/buttonComp';
const Recommended = ({ handleClick }) => {
    return (
      <>
        <div>
          <h2 className="recommended-title font-medium text-base">Recommended</h2>
          <div className="md:flex hidden">
            <Button onClickHandler={handleClick} value="" title="All Products"/>
            <Button onClickHandler={handleClick} value="Pant" title="Pants" />
            <Button onClickHandler={handleClick} value="suit" title="Suit" />
            <Button onClickHandler={handleClick} value="short" title="short" />
            <Button onClickHandler={handleClick} value="counsel" title="counsel" />
          </div>
        </div>
      </>
    );
  };
  
  export default Recommended;