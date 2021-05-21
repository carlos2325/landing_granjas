import { SignatureModel } from "../../../db/Models/schemaSignature";
import conectorDB from "../../../utils/conectorDB";

conectorDB()

export default async function userHandler(req, res) {
    const {method} = req;
  

    switch (method) {
        case "GET":
          // Get data from your database
          const signatures = await SignatureModel.find()
          res.status(200).json({totalFirmas: signatures.length});
          
          break;
    }
}
