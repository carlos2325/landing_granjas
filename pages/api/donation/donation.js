import { Mongoose } from "mongoose";
import { ModeloDonation } from "../../../db/Models/schemaDonation";
import conectorDB from "../../../utils/conectorDB";

conectorDB()

export default async function userHandler(req, res) {
  const {query: { firstName, lastName, email, amount }, method} = req;
  
  
  
  switch (method) {
    case "GET":
      // Get data from your database
      const donations = await ModeloDonation.find()
      const total = donations
        .filter(item => item.amount)
        .map(item => item.amount)
        .reduce((a,b) => a + b, 0)
      res.status(200).json({donaciones: donations});
      
      break;
    case "POST":
      // Update or create data in your database
      const addDonation = new ModeloDonation({
        firstName: firstName,
        lastName: lastName,
        email: email,
        amount: amount
      })
      await addDonation.save()

      res.status(200).json("listo");
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
