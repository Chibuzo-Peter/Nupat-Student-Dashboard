import React, { useState, useCallback } from "react";
// import { Calendar } from "@natscale/react-calendar";
import { Calendar} from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
  


// export default function CalendarGfg() {
//     const [value, setValue] = useState();
 
//     const onChange = useCallback(
//         (value) => {
//             setValue(value);
//         },
//         [setValue]
//     );
 
//     return (
//         <div>
//             <h1>Calendar:</h1>
//             <Calendar value={value} onChange={onChange} style={{width:"50vw", align:"left"}} />
//         </div>
//     );
// }

export default function Calendargfg() {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <h3>Calendar:</h3>
            {/* <Calendar
                onChange={onChange}
                value={value}
                
            /> */}
<iframe src="https://calendar.google.com/calendar/embed?height=391&wkst=1&ctz=Africa%2FLagos&bgcolor=%23039BE5&showPrint=0&showTabs=0&src=MWEzY2RiYmNkNGM3OTdjYjRlZWMyYWI1YmYzNmYyNzRhMjZhYjk0NThmMTIzNzI1MTE3OGViYmUyZWUyOWJlZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4ubmcjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%238E24AA&color=%230B8043" style={{borderWidth:"0", width:"30vw", height:"40vh", ':hover':{bgcolor:"#CBD5F4" }, cursor:"pointer",  frameborder:"0", scrolling:"no"}}></iframe>

        </div>
        
    );
}