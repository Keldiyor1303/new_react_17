import React from 'react';

const MyComponent = () => {
    const date = new Date();
    const setDateInput=()=>{
    const futureDate = date.getDate() ;
        date.setDate(futureDate);
    }
    const defaultValue = date.toLocaleDateString('en-CA');

    return (
        <input id="dateRequired" type="date" name="dateRequired" defaultValue={defaultValue} onClick={()=>setDateInput()} />
    );

};

export default MyComponent