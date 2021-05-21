import { Mongoose } from "mongoose";
import { SignatureModel } from "../../../db/Models/schemaSignature";
import conectorDB from "../../../utils/conectorDB";

conectorDB()

export default async function userHandler(req, res) {
  const {query: { firstName, lastName, email, type, phone }, method} = req;
  
  
  switch (method) {
    case "GET":
    try {
        // Get data from your database
        const signatures = await SignatureModel.find()
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Upss, ha ocurrido un error, intente de nuevo más tarde' });
    } finally {
        res.status(200).json({firmas: signatures});
    }
      break;
    case "POST":

    try {
        // Update or create data in your database
        const addSignature = new SignatureModel({
          firstName: firstName,
          lastName: lastName,
          email: email,
          type: type,
          phone: phone
        })
        await addSignature.save()     
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Upss, ha ocurrido un error, intente de nuevo más tarde' });
    } finally {
        res.status(201).json("Creado con exito");
    }
      break;
    default:
      res.setHeader("Allow", ["GET", "PUT"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
