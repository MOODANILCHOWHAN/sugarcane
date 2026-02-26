// import gangDetails from './gangDetailsModel.js';
// const gangDetailsController={
//   addMembers:async (req,res)=>{
//     try{
//       const body =req.body;
//       const data= new gangDetails(body);
//       data.save();
//      return res.status(201).json({data:data,message:"Gang member added sucessfully"})
//     }catch(error){
//       return res.status(500).json({message:"Something went wrong."})
//     }
//   }
// }

// export default gangDetailsController;
import GangDetails from "./gangDetailsModel.js";
import Gang from "../gangs/model/gang.js";

const gangDetailsController = {
  addMembers: async (req, res) => {
    try {
      const data = await GangDetails.create(req.body);

      // push member into gang
      if (req.body.gang) {
        await Gang.findByIdAndUpdate(req.body.gang, {
          $push: { members: data._id },
        });
      }

      return res
        .status(201)
        .json({ data, message: "Gang member added successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

export default gangDetailsController;