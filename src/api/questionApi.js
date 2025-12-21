export const  getNextQuestion = async (userId=242)=>{
    try{   
    const res = await fetch(`https://neuraprep.onrender.com/api/next-question/${userId}`);
    const data = await res.json();
     console.log("data:",data);
     return data;
    }
    catch(err){
               console.log("Error",err);
    }
}

// getNextQuestion(241)

export const submitResult = async (userId, result)=>{

     try{const res =await fetch(`https://neuraprep.onrender.com/api/submitResult`,{
     method : "POST",
     headers : {"Content-type" : "application/json"},
     body : JSON.stringify({userId,result})
     });
     
     const data = await res.json();

     console.log("data",data);
     return data;
    }
     catch(err){
              console.log("Error submitting result:", err);
     }
}

// submitResult(241,"solved");