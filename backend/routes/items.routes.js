import axios from "axios";
import { Router } from "express";
import { BuyItem } from "../controllers/itemsControllers.js";
import { db } from "../db.js";

const itemRouter = Router();

itemRouter.get("/", async (req, res) => {
  /* const db = [];
    const response = await axios.get("http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json");
    const result = response.data.data;
    for(let i in result){
        console.log(i);
        db.push({
            id: result[i].id,
            name: result[i].name,
            price: Math.floor(Math.random()*10)*10+200,
            tags: result[i] .tags
        })
    }
    const result = [];
    db.map(i => {
        result.push(...i.tags)
    });
    const set = [new Set(result)];*/
  res.json(db);
});

itemRouter.post("/", BuyItem);

export default itemRouter;

/*     'https://api.mercadopago.com/checkout/preferences' \
    -H 'Authorization: Bearer YOUR_ACCESS_TOKEN' \
    -H 'Content-Type: application/json' \ 
    -d '{
"items": [
  {
    "title": "Dummy Title",
    "category_id": "car_electronics",
    "quantity": 1,
    "unit_price": 10
  }
]*/
