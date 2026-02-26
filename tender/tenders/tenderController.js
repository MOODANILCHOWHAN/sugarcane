import tenderModel from './tenderModel.js';
const tenderController={
    addTender:async (req,res)=>{
        try {
            const body=req.body;
        const data= new tenderModel(body);
        await data.save();
        return res.status(200).json({message:"data saved",data:data})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message:error})
        }
        

    },
    getTender: async(req,res)=>{
        try {
            const {id}=req.params;
            const data = await tenderModel.findById(id).populate([
                {path:'gangs',model:"Gang"},
                {path:'lorries',model:"Lorry"},
                {path:'loads',model:"Load"}
            ]);
            if(!data){
                return res.status(404).json({message:"Tenders are not found."})
            }

            return res.status(200).json({data:data,message:"data"})
        } catch (error) {
            console.log(error)
            return res.status(500).json({message:error})
        }
    }
}

export default tenderController;