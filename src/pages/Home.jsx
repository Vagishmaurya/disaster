import React from 'react'
import { Link } from 'react-router-dom'
import {FaArrowRight , FaAmbulance} from 'react-icons/fa';
import HighlightText from '../components/core/HomePage/HighlightText';
import CTAButton from '../components/core/HomePage/Button';
import Banner from '../assets/Images/banner.mp4'
import CodeBlocks from '../components/core/HomePage/CodeBlocks';
import TimeLineSection from '../components/core/HomePage/TimeLineSection';
import LearningSection from '../components/core/HomePage/LearningSection';
import InstructorSection from '../components/core/HomePage/InstructorSection';
import Footer from '../components/Common/Footer';
import ExploreMore from '../components/core/HomePage/ExploreMore';
import ReviewSlider from '../components/Common/ReviewSlider';



const Home = () => {
  return (
    <div>
     
    {/*Section 1*/}
    <div className='relative mx-auto flex flex-col items-center  max-w-maxContent bg-white text-richblack-800 justify-between'>
        
        <Link to={"/"}>
           <div className='group mt-16 p-1 mx-auto rounded-full bg-pink-500 font-bold text-white
           transition-all duration-200 hover:scale-95 w-fit'>
              <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] transition-all 
              duration-200 group-hover:bg-pink-600'>
                  <p>EMERGENCY</p>
                  {/* <FaArrowRight/> */}
                  {/* <FaAmbulance/> */}
              </div>
           </div>
        </Link>

        <div className='font-semibold text-3xl mt-7 text-center'>
        Preparedness is the key to effective disaster management.
            {/* <HighlightText text={" India"}/> */}
            {/* . Specially desgined for Himanchal Pradesh */}
        </div>

        <div className='mt-4 w-[80%] text-center font-bold text-lg text-richblack-400'>
         We Provide information on evacuation routes, emergency contacts, and local shelters. Establish and maintain systems for early warning and notification of impending disasters.Encourage individuals and families to create disaster kits with essential supplies.Activate emergency response teams and agencies according to the disaster plan.
          
           </div>

        <div className='flex flex-row mt-8 gap-7'>
        <CTAButton active={true} linkto={"/signup"}>
            Call Ambulance
        </CTAButton>
        <div className='text-white'>
        <CTAButton active={false} linkto={"/login"}>
            Connect With other Services
        </CTAButton>
        </div>
        </div>

        {/* <div className='mx-3 my-12 shadow-lg'>
            <video
            muted
            loop
            autoPlay
            >
            <source src={Banner}/>
            </video>
        </div> */}

        <div className='m-2'>
            <CodeBlocks 
                position={"flex flex-col lg:flex-row"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Early warning systems save lives in times of disaster.
                        {/* <HighlightText text={" Himanchal Pradesh"}/> */}
                        
                    </div>
                }
                subheading={"We Provide information on evacuation routes, emergency contacts, and local shelters. Establish and maintain systems for early warning and notification of impending disasters.Encourage individuals and families to create disaster kits with essential supplies.Activate emergency response teams and agencies according to the disaster plan."}
                ctabtn1={
                    {
                        btnText:"Contact Us",
                        linkto:"/signup",
                        active:true,
                    }
                }
                ctabtn2={
                    {
                        btnText:"Chat With Us",
                        linkto:"/login",
                        active:true,
                    }
                }
                codeblock={`Preparedness is the key to effective disaster management\nEarly warning systems save lives in times of disaster\nSwift and coordinated action is crucial in the face of a disaster\nRegular and timely Status Update\nGet Free Consultation\nVoice assistant\nChat With Us\nJoin us`}
                codeColor={"text-yellow-25"}
            />
        </div>

        {/* <div className='m-2'>
            <CodeBlocks 
                position={"flex flex-col-reverse lg:flex-row-reverse"}
                heading={
                    <div className='text-4xl font-semibold'>
                        Join Us In
                        <HighlightText text={" Seconds"}/>
                    </div>
                }
                subheading={"Our doctors spend adequate time with our patients to identify the root cause of the problem so that we can not only cure but also prevent the problem from recurring ensuring our patient's questions are answered."}
                ctabtn1={
                    {
                        btnText:"Book Appointment",
                        linkto:"/signup",
                        active:true,
                    }
                }
                ctabtn2={
                    {
                        btnText:"Learn More",
                        linkto:"/login",
                        active:false,
                    }
                }
                codeblock={`Schedule your appointment\nConnect With doctor\nPersonalized health check ups\nRegular and timely follow-ups are done\nGet Free Consultation\nOrder Medicine\nChat With Us\nUpload your previous Certificates\nBe Healthy\nJoin us`}
                codeColor={"text-yellow-25"}
            />
        </div> */}

        {/* <ExploreMore /> */}

    </div>

    {/*Section 2*/}
    <div className='bg-pure-greys-5 text-richblack-700'>
       
       {/* <div className='h-[333px] homepage_bg'> */}

       {/* <div className='w-11/12 max-w-maxContent flex flex-col justify-between items-center gap-5 mx-auto'>

       <div className='h-[200px]'></div>
       <div className='text-white flex gap-7'>

       <CTAButton active={true} linkto={"/signup"}>
           
           <div className='flex gap-2 items-center'>
            Explore More
           <FaArrowRight/>
           </div>

       </CTAButton>

       <CTAButton active={false} linkto={"/signup"}>
           
           <div className='flex items-center'>
            Book Appointment
           </div>

       </CTAButton>

       </div>
       
       </div> */}

       {/* </div> */}

       <div className='w-11/12 mx-auto flex max-w-maxContent flex-col items-center justify-between gap-7'>

             <div className='flex flex-row gap-10 mb-10 mt-[100px]'>
                <div className='text-4xl font-semibold w-[45%]'>
                Mitigate, Prepare, Respond, Recover:
                    <HighlightText text={"  Building Resilience Together.  "} />
                </div>

                <div className='flex flex-col gap-8 w-[40%] items-start'>
                   <p className='text-[16px]'>
                   
                   Disaster management entails proactive planning and coordination,
                   To mitigate risks and ensure community's safe restoration.
                   From preparedness drills to swift response, it's a crucial dedication.
                   </p>

                   <CTAButton active={true} linkto={"/signup"}>
                    Learn more
                   </CTAButton>
                </div>
             </div>

             {/* <TimeLineSection /> */}

             {/* <LearningSection /> */}
             
       </div>


    </div>

    {/*Section 3*/}
    <div className='w-11/12 mx-auto max-w-maxContent flex flex-col items-center justify-between bg-richblack-900 text-white'>

        {/* <InstructorSection /> */}

        {/* <h2 className='font-semibold text-4xl text-center mt-10'>Review from Other Learners</h2> */}
        {/* <ReviewSlider /> */}
    </div>

    {/*Footer Section*/}
    <Footer />

    </div>
  )
}

export default Home
