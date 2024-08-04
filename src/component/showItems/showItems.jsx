import React, { useState, useEffect, useRef } from "react";
import Item from "./item";
import "./showItems.css";

function Main() {
  const [items, setItems] = useState([]);
  const [limit, setLimit] = useState(8);
  const observer = useRef();
  const sentinel = useRef(null);

  useEffect(() => {
    function getItems() {
      const url = "http://192.168.1.15:5000/items";
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      fetch(url, requestOptions)
        .then((response) => response.json())
        .then((data) => setItems(data))
        .catch((error) => {
          console.log("GET request failed:", error);
        });
    }
    getItems();
  }, []);

  useEffect(() => {
    const options = {
      root: null, // null means the viewport
      rootMargin: "0px",
      threshold: 1.0, // 1.0 means 100% of the element is visible
    };

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLimit((prevLimit) => prevLimit + 8);
      }
    }, options);

    if (observer.current && sentinel.current) {
      observer.current.observe(sentinel.current);
    }

    return () => {
      if (observer.current && sentinel.current) {
        observer.current.unobserve(sentinel.current);
      }
    };
  }, []);

  return (
    <div className="items-container">
      {items.slice(0, limit).map((item) => {
        return (
          <Item
            key={item.id}
            name={item.name}
            price={item.price}
            description={item.description}
            picture={item.picture}
          />
        );
      })}
      <div ref={sentinel} className="sentinel"></div>
    </div>
  );
}
export default Main;
