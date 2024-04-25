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
            <Calendar
                onChange={onChange}
                value={value}
                sx={{borderRadius:"20px"}}
            />
        </div>
    );
}