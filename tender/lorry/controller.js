// import LorryModel from './model.js';

// const lorryController = {
//   addingLorry: async (req, res) => {
//     const { name, lorryNo, phoneNumber, totalAmount } = req.body;
//     if (!name && !lorryNo && !phoneNumber && !totalAmount) {
//       return res.status(400).json({ message: 'All fields are required' });
//     }
//     const data = new LorryModel(req.body);
//     data.save();
//     return res
//       .status(201)
//       .json({ data: data, message: 'Data added Sucessfully' });
//   },
// };

// export default lorryController;
import Lorry from "./lorryModel.js";
import Tender from "../tenders/tenderModel.js";

const lorryController = {
  addingLorry: async (req, res) => {
    try {
      const data = await Lorry.create(req.body);

      if (req.body.tender) {
        await Tender.findByIdAndUpdate(req.body.tender, {
          $push: { lorries: data._id },
        });
      }

      return res
        .status(201)
        .json({ data, message: "Lorry added successfully" });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  },
};

export default lorryController;