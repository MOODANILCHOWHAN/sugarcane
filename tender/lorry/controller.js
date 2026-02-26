import LorryModel from './model.js';

const lorryController = {
  addingLorry: async (req, res) => {
    const { name, lorryNo, phoneNumber, totalAmount } = req.body;
    if (!name && !lorryNo && !phoneNumber && !totalAmount) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const data = new LorryModel(req.body);
    data.save();
    return res
      .status(201)
      .json({ data: data, message: 'Data added Sucessfully' });
  },
};

export default lorryController;
