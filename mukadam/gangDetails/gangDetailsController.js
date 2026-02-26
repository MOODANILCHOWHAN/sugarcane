import gangDetails from './gangDetailsModel.js';
const gangDetailsController={
  addMembers:async (req,res)=>{
    try{
      const body =req.body;
      const data= new gangDetails(body);
      data.save();
     return res.status(201).json({data:data,message:"Gang member added sucessfully"})
    }catch(error){
      return res.status(500).json({message:"Something went wrong."})
    }
  }
}

export default gangDetailsController;