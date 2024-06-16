import React from 'react';
const Title=()=>{
    return <h2>NetFlix Picture</h2>
}
const Image=()=>{
  return (
    <>
     <Title/>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Netflix"/>
    
  </>
  );
}
const Netflix = () => {
    return (
        <div className='Netflix'>
          <Image/>
          <Image/>
          <Image/>
          

        </div>
    );
};

export default Netflix;