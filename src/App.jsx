import rock1 from './rock1.png'
import Paper1 from './paper1.png'
import scissors from './scissors.png'
import { useState } from 'react'

const App=()=>{
  const [userchoice,setuserchoice]=useState("");
  const [compchoice,setcompchoice]=useState("");
  const [userscore,setuserscore]=useState(0);
  const [compscore,setcompscore]=useState(0);
  const [result,setresult]=useState("Play The Move!");

  

  function playgames(choice){
     const choices=["stone","paper","scissors"];
     const images={
      stone:rock1,
      paper:Paper1,
      scissors:scissors
     }
    
    const random=choices[Math.floor(Math.random()*3)]
    setuserchoice(images[choice])
    setcompchoice(images[random])
    if(choice===random){
      setresult("Draw!");

    }else if((choice==="stone"&&random==="scissors")||
              (choice==="paper"&&random==="stone")||
              (choice==="scissors"&&random=="paper")
            ){
              setresult("You Win!")
              setuserscore(userscore+1);
    }else{
      setresult("Comp Win!")
      setcompscore(compscore+1);
    }


  }
  function playagain(){
    setuserchoice("");
    setuserscore(0);
    setcompchoice("")
    setcompscore(0);
    setresult("Play The Move!")
  }

  return(
   <div>
    <div className="bg-blue-800 sm:h-25 h-20 text-center  border border-b-blue-400">
    <h1 className="sm:text-6xl  text-3xl  text-white font-bold txt ">Rock   <span className="text-blue-600  txt">Paper</span> Scissors</h1>
    <p className="text-center text-white sm:mt-2 mt-3 text-7lg font-semibold">Choose your move and beat the CPU!</p>
    </div>
    <div className="min-h-screen  pt-11 w-full head">
      <div className='flex flex-row sm:flex-row justify-center sm:gap-70 gap-15 '>
        <div>
        <div className='img3'>
        <img src={userchoice} className='img ' alt="img"/>
        </div>
        <h1 className='text-center sm:text-4xl  text-2xl text-white font-semibold'>You</h1>
        <h1 className='text-center text-2xl sm:text-4xl text-white font-bold sm:h-12 sm:w-33 h-10 w-25 rounded-l-full rounded-r-full  border border-blue-400 sm:ml-8 mt-3 pt-1'>{userscore}</h1>
        </div>
          <div>
            <div className='img3'>
              <img src={compchoice} className='img ' alt="img"/>
            </div>
        
        <h1 className='text-center sm:text-4xl  text-2xl text-white font-semibold'>Computer</h1>
        <h1 className='text-center text-2xl sm:text-4xl text-white font-bold sm:h-12 sm:w-33 h-10 w-25 rounded-l-full rounded-r-full  border border-blue-400 sm:ml-8 mt-3 pt-1'>{compscore}</h1>
        </div>

      </div>
      <div className='flex flex-row justify-center pt-6'>
        <h1 className='bg-blue-600 sm:h-17 sm:w-90 h-14 w-70 text-center pt-3 rounded-l-full rounded-r-full sm:text-4xl text-2xl font-bold text-white' style={{backgroundColor:result=="You Win!"?"#19c819":result=="Comp Win!"?"red":result==="Draw!"?"#15e2ddf7":"blue"}}>{result}</h1>
      </div>
      <div className='flex flex-row justify-center gap-2 pt-7'>
        <div>
          <button onClick={()=>playgames("stone")}>
          <img src={rock1} className='sm:h-28 sm:w-50 rounded rounded-2xl  h-20 w-25 ml-1 ' alt="img " />
          </button>
        </div>
         <div>
          <button onClick={()=>playgames("paper")}>
          <img src={Paper1} className='sm:h-28 sm:w-50 rounded rounded-2xl  h-20 w-25' alt="img"/>
          </button>
        </div>
         <div>
          <button onClick={()=>playgames("scissors")}>
          <img src={scissors} className='sm:h-28 sm:w-50 rounded rounded-2xl h-20 w-25 mr-1' alt="img"/>
          </button>
        </div>
      </div>
      <div className='flex flex-row justify-center'>
        <button className='text-center sm:text-2xl text-white  sm:h-15 sm:w-60 h-10 w-40 rounded-l-full rounded-r-full  border border-blue-700  mt-10  ' onClick={playagain} >Play Again</button>
      </div>
      
    </div>
    </div>
   
  )
}
export default App