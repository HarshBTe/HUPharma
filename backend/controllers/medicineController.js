
import medicineModel from "../models/medicineModel.js";
import fs from 'fs';
import multer from 'multer';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9) + "." + file.mimetype.split('/')[1];
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})
const upload = multer({ storage: storage });
  
// Add medicine item
const addMedicine = async (req, res) => {
    console.log(req.body)
    try {
        // Ensure req.file is defined before accessing filename
        if (!req.file) {
            return res.status(400).json({ success: false, message: "No image file provided" });
        }

        // Extract file information and request body
        const image_filename = req.file.filename;

        // Create new medicine object
        const medicine = new medicineModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: image_filename,
        });

        // Save to database
        await medicine.save();
        res.status(201).json({ success: true, message: "Medicine added successfully" });
    } catch (error) {
        console.error("Error adding medicine:", error);
        res.status(500).json({ success: false, message: "Error adding medicine", error: error.message });
    }
};


// all medicine list
const listMedicine = async (req,res) => {
    try{
        const medicines = await medicineModel.find({});
        res.json({success: true, data: medicines})
    } catch (error){
        console.log(error)
        res.json({success: false, message: "Error"})
    }
}  

const removeMedicine = async (req, res) => {
    try{
          const medicine = await medicineModel.findById(req.body.id);
          fs.unlink(`uploads/${medicine.image}`, () => {})

          await medicineModel.findByIdAndDelete(req.body.id)
          res.json({success: true, message: "Medicine Removed"})
    }
     catch(error) {
        console.log(error)
        res.json({success: false, message: "Error"})

    }

}

export { addMedicine, listMedicine, removeMedicine };

