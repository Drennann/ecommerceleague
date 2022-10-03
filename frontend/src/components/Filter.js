import { motion } from "framer-motion";
import { useState } from "react";
const boxes = ["Fighter", "Tank", "Mage", "Assassin", "Marksman", "Support"];

export default function Filter({
  price,
  setPrice,
  filteredItems,
  setFilteredItems,
  setNameTyped,
  setTags,
  tags,
}) {

  const onChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  const onClickHanlder = (e) => {
    let res;
    if (e === "lowest") {
      res = [...filteredItems.sort((a, b) => a.price - b.price)];
    } else {
      res = [...filteredItems.sort((a, b) => b.price - a.price)];
    }
    console.log(res);
    setFilteredItems(res);
  };

  const onChangeTextHandler = (e) => {
    setNameTyped(e.target.value);
  };

  const onClickBoxHandler = (b) => {
    if (!tags.includes(b)) {
      setTags((prev) => [...prev, b]);
    } else {
      const res = new Set(tags);
      res.delete(b);
      setTags([...res]);
    }
  };
  return (
    <div className="FilterContainer">
      <motion.div
        className="FilterFixed"
        initial={{ x: -200 }}
        animate={{
          x: 0,
          transition: {
            duration: 0.8,
          },
        }}
      >
        <div>
          <p className="NameP">Name: </p>
          <input
            className="Searcher"
            type="text"
            onChange={onChangeTextHandler}
          ></input>
        </div>
        <div>
          <p className="PriceP">Max Price: {price}</p>
          <input
            type="range"
            min={200}
            max={290}
            defaultValue={290}
            step={10}
            onChange={onChangeHandler}
          ></input>
        </div>
        <div className="SortedContainer">
          <p className="SortedP">Sort:</p>
          <div className="SortedElection">
            <p
              onClick={() => onClickHanlder("lowest")}
              className="SortedElectionP"
            >
              Lowest First
            </p>
          </div>
          <div className="SortedElection">
            <p
              onClick={() => onClickHanlder("highest")}
              className="SortedElectionP"
            >
              Highest First
            </p>
          </div>
        </div>
        <div className="ClassesContainer">
          <p>Classes: </p>
          <div className="Classes">
            {boxes.map((b) => {
              return (
                <div key={b}>
                  <p>{b}</p>
                  <input
                    type="checkbox"
                    onClick={() => onClickBoxHandler(b)}
                  ></input>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
