import React from 'react';
const FirstComponent=()=>{
   return <h1>Hello FirstComponent</h1>;
};
const SecondComponent=()=>{
    return <FirstComponent/>;
}
const Components = () => {
    return (
        <div>
            <SecondComponent/>
        </div>
    );
};

export default Components;