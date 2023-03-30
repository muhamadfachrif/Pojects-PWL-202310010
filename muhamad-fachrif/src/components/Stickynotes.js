import React, { useState } from 'react'

export default function Stickynotes() {
    const [add, setAdd] = useState(1)
    const StickyStick = () =>{
        return (
    <div>
        <div className='card' style={{width: "100%"}}>
            <div className='card-header'>
            <div className='card-titel'>
            <span onClick={()=>setAdd(add+1)}>+</span>
            <span onClick={()=>setAdd(add-1)}>x</span>
            </div>
            <div className='card-body'>
            <textarea name="" id=""></textarea>
            </div>
            </div>
        </div>
    </div>
        )
    }
  
 const Loopdanote = () => {
    let items = []
    for (let index =1; index <= add; index++){
        items.push (
            <div className='col-4'>
            <StickyStick/>
            </div>
        )
    }

    return items

 }
    
return(
    <div className='card '>
        <div className='card-header'>
            <span onClick={"add"}></span>
        </div>
            <div className='card-body'>
            <div className='row'>
            <Loopdanote/>
            </div>
        </div>
    </div>
)    
    
}

