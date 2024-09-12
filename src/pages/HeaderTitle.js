import React from 'react';

const HeaderTitle = (props) => {
  return (
    <>      
      <div className='header-image text-center' style = {{collor:"#fff"}}>
      <h1 style  = {{fontSize:"50px", textTransform:"uppercase"}}>{props.title}</h1>
      <p >Home &#62; {props.title}</p>
    </div>
    </>

  );
}

export default HeaderTitle;
