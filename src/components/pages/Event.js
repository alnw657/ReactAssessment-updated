import React from 'react'
import './Event.css';
import { ImCalendar } from "react-icons/im";
import { ImLocation2 } from "react-icons/im";


function Event() {
    return (
        
        <div className='container'>
           <style>{'body { background-color: #FBFAFF; }'}</style>
            
            <img src="images/birthdaycake.png" className="eventimage" />
                <h1 className='event-title'>Birthday Bash</h1>
                <p className='name'>Hosted by <b>Elysia</b></p>
                <div className='row'>
                <div class="col-auto">
                <div className='logo1'><ImCalendar /></div>
                </div>
                <div class="col">
                <h1 className='event-date1'>18 August 6:00PM</h1>
                <h1 className='event-date2'>to<b> 19 August 1:00 </b>UTC +10</h1>
                </div>
                </div>
                <div className='row'>
                <div class="col-auto">
                <div className='logo2'><ImLocation2 /></div>
                </div>
                <div class="col">
                <h1 className='address1'>Street Name</h1>
                <h1 className='address2'>Suburb, State, Postcode</h1>
                </div>
                </div>
  
           
       
     
        
        </div>
    );
}

export default Event;