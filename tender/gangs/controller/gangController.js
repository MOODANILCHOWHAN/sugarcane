import validatingFields from './services/gangServices.js';
import GangModel from './model/gang.js';

const gangController = {
  addingGang: async (req, res) => {
    const body = req.body;
    constisValid = validatingFields(body);
    if (!isValid) {
      res.status(400).json({ message: isValid.message });
    }
    const data = new GangModel(body).save();
   return  res.status(201).json({data:data,message:'Gang added sucessfully.'})
  },
  getGang : async(req,res)=>{
    const id=req.param;
    try{

      if(!id){
        return res.status(400).json({message:"Gang Id is required"})
      }
      const data= GangModel.fingById(id).populate('gangDetails');
      if(!data){
        return res.status(400).json({message:"Gang not found"});
      }
      return res.status(200).json({data:data,message:"Gang details."});
    }catch(err){
      return res.status(500).json({message:"Something went wrong"})
    }
  }
};

export default gangController;