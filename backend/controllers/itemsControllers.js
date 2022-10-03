import {db} from "../db.js";
import axios from "axios";

export const BuyItem = async (req, res) => {
  try {
    const { itemsId } = req.body;

    const items = db.filter((item) => itemsId.includes(item.id));

    const itemsAxios = items.map((i) => {
      return {
        category_id: i.id,
        title: i.name,
        unit_price: i.price,
        quantity: 1,
      };
    });

    const body = {
      items: itemsAxios,
    };

    const options = {
      headers: {
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
    };

    const response = await axios.post(
      "https://api.mercadopago.com/checkout/preferences",
      body,
      options
    );

    res.json(response.data.init_point);
  } catch (e) {
    res.status(400).json();
  }
};
