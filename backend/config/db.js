import mongoose from "mongoose"

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://harshdubey:HarshD36%40@cluster0.gy1d4yp.mongodb.net/hupharma').then(() => console.log("DB Connected"));

}


