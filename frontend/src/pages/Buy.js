import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Items from "../components/Items";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";

export default function Buy() {
  const [items, setItems] = useState([]);
  const [price, setPrice] = useState(290);
  const [filteredItems, setFilteredItems] = useState([]);
  const [tags, setTags] = useState([]);
  const [nameTyped, setNameTyped] = useState("");

  const arrayContainerArray = (arr1, arr2) => {
    let result = true;
    arr1.map((i) => {
      if (!arr2.includes(i)) {
        result = false;
      }
    });
    return result;
  };

  const filterItems = () => {
    const result = items.filter(
      (i) =>
        i.price <= price &&
        i.name.toLocaleLowerCase().includes(nameTyped.toLocaleLowerCase()) &&
        arrayContainerArray(tags, i.tags)
    );
    /* && arrayContainerArray(tags ,i.tags) && [i.name].includes(nameTyped) */
    setFilteredItems(result);
  };

  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  useEffect(() => {
    filterItems();
  }, [price, tags, nameTyped]);

  return (
    <motion.div
      animate={{ width: "100%" }}
      exit={{
        x: window.innerHeight,
        transition: {
          duration: 0.2,
        },
      }}
    >
      <NavBar />
      <div className="BuyContainer">
        <Filter
          tags={tags}
          setTags={setTags}
          price={price}
          setPrice={setPrice}
          filteredItems={filteredItems}
          setFilteredItems={setFilteredItems}
          setNameTyped={setNameTyped}
        />
        <Items setItems={setItems} filteredItems={filteredItems} />
      </div>
    </motion.div>
  );
}
