
import Stack from "./Stack"
import cartoon from "../assets/images/cartoon.jpg"

function About() {
  return (
    <div className="md:h-screen">
      <h1 className="">About Me</h1>
      <div className="w-full h-full flex flex-col justify-evenly">
        <div className="flex">
         <div className="flex flex-col justify-center gap-4">
           <p> 
            Hi there! I'm Edmilson, a <span className="font-bold text-neongreen">front-end developer from Lisbon, Portugal</span>
            who has passion for <span className="font-bold text-neongreen">problem-solving and creating beautiful and
            user-friendly websites.</span> 
          </p>
          <br />
          <p>
          
            I began my journey as <span className="font-bold text-neongreen">self taught </span> but as that wasn't enough for me I
            enrolled in a <span className="font-bold text-neongreen">computer science degree</span> because I believe that
            knowledge is power and it will make me improve my skills.
          </p>
          <br />
          <p>
            I enjoy the <span className="font-bold text-neongreen">challenge </span> of taking a project from conception to
            completion, and <span className="font-bold text-neongreen">I pride myself on my ability to troubleshoot and
            find creative solutions to even the most difficult problems.</span>
          </p>
         </div>
         <img className="h-[500px]" src={cartoon} alt="cartoon image of myself" />
        </div>
       <Stack />
      </div> 
      
    </div>
  )
}

export default About
