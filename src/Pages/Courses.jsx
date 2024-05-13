import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Navbar from '../Components/Navbar'
import { PopularCourses } from '../Components/CourseComponents/PopularCourses'
import  ProgressBar  from '../Components/CourseComponents/ProgressBar'
import  ProgressBar2  from '../Components/CourseComponents/ProgressBar2'
import  ProgressBar3  from '../Components/CourseComponents/ProgressBar3'
import { Add, ChromeReaderMode, Edit, MenuBook } from '@mui/icons-material'
import Calendar from '../Components/CourseComponents/CourseCalender'
import DailySchedule from '../Components/CourseComponents/DailySchedule'




const Courses = () => {
  return (
    <>
    <Navbar />
    <div style={{display:"flex", flexDirection:"row", alignItems:"space-between", paddingTop:"1%", backgroundColor:"#eee"}}>
        <Sidebar />

        {/* This is the Popular Courses section*/}

        <div style={{width:"50%", paddingInline:"10px"}} >
          <section >
            <div style={{display:"flex", justifyContent:"space-between", marginInline:"10px"}}>
              <h2 style={{fontWeight:"bold"}}>Popular Course</h2> 
              <button style={{ borderRadius:"5px", backgroundColor:"#599fd5", color:"#000", paddingInline:"5px"}}>View All</button>
              </div>
            
            <div style={{display:"flex"}}>
              <div style={{height:"30vh", width:"40vw", borderRadius:"10px", backgroundColor:"#fff", padding:"10px", margin:"10px" , border:"1px solid gray"}}>
              {PopularCourses.map((course) => (
               <div key={course.id}> 
                <small style={{backgroundColor:"lightgray", padding:"10px", borderRadius:"50%"}}>{course.icon}</small>
                <p  style={{borderBottom:"1px solid gray", marginBlock:"10px"}}>{course.title}</p>
                 <div  style={{display:"flex" }}>
                    <img style={{width:"50px"}}src={course.img} alt="Facilitator image" /> 
                    <div style={{display:"flex", flexDirection:"column",marginLeft:"20px"}}>
                    <h4 style={{color:"lightgray", display:"inline-flex"}}>Facilitator</h4>
                    <h5>{course.facilitator}</h5>
                    </div>
                 </div>
              </div>
                  
                ))}
              </div>
            <div style={{height:"30vh", width:"40vw", borderRadius:"10px", backgroundColor:"#fff", padding:"10px", margin:"10px", border:"1px solid gray"}}>
            {PopularCourses.map((course) => (
               <div key={course.id}> 
                <small style={{backgroundColor:"lightgray", padding:"10px", borderRadius:"50%"}}>{course.icon}</small>
                <p  style={{borderBottom:"1px solid gray", marginBlock:"10px"}}>{course.title}</p>
                 <div  style={{display:"flex" }}>
                    <img style={{width:"50px"}}src={course.img} alt="Facilitator image" /> 
                    <div style={{display:"flex", flexDirection:"column",marginLeft:"20px"}}>
                    <h4 style={{color:"lightgray", display:"inline-flex"}}>Facilitator</h4>
                    <h5>{course.facilitator}</h5>
                    </div>
                 </div>
              </div>
                  
                ))}
            </div>
            </div>
          </section>

          <section >
            <div style={{display:"flex", justifyContent:"space-between",marginTop:"30px",marginInline:"10px"}}><h2 style={{fontWeight:"bold"}}>Home Tasks & Assignments</h2> <button style={{ borderRadius:"5px", backgroundColor:"#599fd5", color:"#000", paddingInline:"5px"}}>View All</button></div>

            <div style={{display:"flex"}}><div style={{height:"20vh", width:"30vw", borderRadius:"10px", backgroundColor:"#fff", padding:"10px", margin:"10px", border:"1px solid gray"}}>
              <MenuBook />
              <h2 style={{marginBlock:"10px"}}>Carousels and Animations</h2>
              <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
                <label >Continue</label>
                <input type="range" name="" id="" />
              </div>
            </div>

            <div style={{height:"20vh", width:"30vw", borderRadius:"10px", backgroundColor:"#fff", padding:"10px", margin:"10px", border:"1px solid gray"}}>
            <ChromeReaderMode sx={{backgroundColor:"#eee"}} />
              <h2 style={{marginBlock:"10px"}}>Buttons and other UI Components</h2>
              <div style={{display:"flex", alignItems:"center", gap:"10px"}}>
                <label >Continue</label>
                <input type="range" name="" id="" />
              </div>
            </div>
            </div>

            <h2 style={{marginTop:"20px"}}><strong>Today's Schedule</strong></h2>
            <div style={{height:"90vh", width:"45vw", borderRadius:"10px", backgroundColor:"#fff", padding:"20px", margin:"10px", border:"1px solid gray"}}>
            <DailySchedule />
            </div>
          </section>
        </div>

                {/* This is the Rightbar */}

        <div style={{width:"auto", marginRight:"20px"}} >
          <h2><strong>My Calender</strong></h2>
        <div style={{backgroundColor:"#fff", padding:"10px", borderRadius:"10px", marginTop:"10px",border:"1px solid gray"}}>
          <Calendar />
        

          <div>
           <span><small style={{backgroundColor:"lightgray", borderRadius:"50%"}}><Add /></small> Add Reminder</span>
           <div style={{display:"flex", justifyContent:"flex-end", gap:"10px"}}>
            <button style={{backgroundColor:"lightblue", paddingInline:"5px", borderRadius:"5px"}}>Remove</button>
            <button style={{backgroundColor:"blue", paddingInline:"5px", borderRadius:"5px"}}>Done</button>
           </div>
          </div>
          </div>
          
          
          <h2 style={{marginTop:"30px"}}><strong>Upcoming Tests</strong></h2>
          <div style={{height:"auto", width:"auto", borderRadius:"10px", backgroundColor:"#fff", padding:"10px", marginTop:"10px", border:"1px solid gray"}}>
          <Edit sx={{backgroundColor:"blue", padding:"2px" , borderRadius:"5px"}}/>
          <div style={{display:"flex",  justifyContent:"space-around", marginTop:"10px"}}><h3>Color Theory in Design</h3> <input type="date" name="" id="" /></div>
          </div>

          <h2 style={{marginTop:"40px"}}><strong>Overall Attendance</strong></h2>
          <div style={{backgroundColor:"#fff", padding:"10px", borderRadius:"10px", marginTop:"10px", paddingInline:"10%", border:"1px solid gray"}}>
            <input type="checkbox" /><label style={{marginLeft:"10px", marginRight:"30px"}}>Chart</label><input type="checkbox" /> <label>Show value</label>
            <div style={{display:"flex", marginTop:"30px"}}><ProgressBar /> <h4 style={{marginLeft:"70px"}}>Total Students</h4></div>
            <div style={{display:"flex", marginTop:"30px"}}><ProgressBar2 /><h4 style={{marginLeft:"70px"}}>Total Present</h4></div>
            <div style={{display:"flex", marginTop:"30px"}}><ProgressBar3 /><h4 style={{marginLeft:"70px"}}>Total Absent</h4></div>
          </div>
        </div>


    </div>
</>
  )
}

export default Courses