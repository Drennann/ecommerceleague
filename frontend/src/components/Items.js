import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Items({ setItems, filteredItems }) {
  const [cart, setCart] = useState([]);
  const [selected, setSelected] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const addCartHandler = (id, price) => {
    if (!cart.includes(id)) {
      setCart((prev) => [...prev, id]);
      setTotalPrice((prev) => prev + price);
    } else {
      const res = cart.filter((i) => i !== id);
      setTotalPrice((prev) => prev - price);
      setCart(res);
    }
  };

  const onBuyHandler = async () => {
    try {
      const response = await fetch("/api/items", {
        method: "POST",
        body: JSON.stringify({
          itemsId: cart,
        }),
        headers: {
          "Content-type": "Application/json",
        },
      });

      const result = await response.json();

      console.log(result)

      window.location.href = result;
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async () => {
      try{
        const response = await fetch("/api/items");
        const result = await response.json();
        setItems(result);
      }catch(e){
        console.log(e);
      }
    })();
  }, []);

  return (
    <div className="ItemsContainer">
      <motion.div
        className="Cart"
        whileHover={{ scale: 1.2, color: "#D6E865" }}
      >
        <FaShoppingCart onClick={onBuyHandler} />
        <p>${totalPrice}</p>
      </motion.div>
      {filteredItems.length > 0 ? (
        filteredItems.map((i) => {
          return (
            <motion.div
              initial={{ opacity: 0.5}}
              whileInView={{opacity: selected[i.id] === 1 ? 1 : 0.5}}
              whileHover={{
                opacity: 1,
              }}
              key={i.id}
              onClick={(e) => {
                addCartHandler(i.id, i.price);
                console.log(selected);
                setSelected(prev => {
                  const res = {...prev};
                  res[i.id] === 1 ? res[i.id] = 0 : res[i.id] = 1;
                  return res;
                })
              }}
            >
              <img
                src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${i.id}_0.jpg`}
                width={200}
                height={363}
                alt="ChampImage"
              ></img>
              <motion.p 
                whileInView={{color: selected[i.id] === 1 ? "#D6E865" : "#d0d0d0"}}
              >${i.price}</motion.p>
            </motion.div>
          );
        })
      ) : (
        <h1 className="error">No hay items que cumplan las condiciones.</h1>
      )}
    </div>
  );
}
