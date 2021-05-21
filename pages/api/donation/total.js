import { ModeloDonation } from "../../../db/Models/schemaDonation";
import conectorDB from "../../../utils/conectorDB";

conectorDB()

export default async function userHandler(req, res) {
    const {method} = req;
  

    switch (method) {
        case "GET":
          // Get data from your database
          const donations = await ModeloDonation.find()
          const total = donations
            .filter(item => item.amount)
            .map(item => item.amount)
            .reduce((a,b) => a + b, 0)
          res.status(200).json({totalDonado: total});
          
          break;
    }
}
