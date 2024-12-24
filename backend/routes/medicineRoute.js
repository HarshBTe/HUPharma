import express from "express"

import { addMedicine, listMedicine, removeMedicine } from "../controllers/medicineController.js"
import multer from "multer"
const medicineRouter = express.Router();

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



medicineRouter.post("/add", upload.single("image"),addMedicine)

medicineRouter.get("/list", listMedicine)

medicineRouter.post("/remove", removeMedicine)



export default medicineRouter;



