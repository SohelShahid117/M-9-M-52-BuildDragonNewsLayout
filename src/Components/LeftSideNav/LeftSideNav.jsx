import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      <h2>Left side nav:{categories.length}</h2>
      <h2>All Categories</h2>
      {categories.map((c) => (
        <Link key={c.id} className="block my-2 text-2xl" to={`/c/${c.id}`}>
          {c.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
