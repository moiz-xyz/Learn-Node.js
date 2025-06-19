import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [product, setProduct] = useState([]);

  // Get Users
  useEffect(() => {
    axios.get("http://localhost:3000/api/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  // Get Products
  useEffect(() => {
    axios.get("http://localhost:3000/api/product")
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Fetch the data from  backend</h1>
      <h1>👤 Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> — {user.email}
          </li>
        ))}
      </ul>

      <h1>🛍️ Product List</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {product.map(p => (
          <div
            key={p.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "300px",
              borderRadius: "8px"
            }}
          >
            <img
              src={p.image}
              alt={p.title}
              style={{ width: "100%", height: "200px", objectFit: "contain" }}
            />
            <h3>{p.title}</h3>
            <p><strong>Price:</strong> ${p.price}</p>
            <p><strong>Category:</strong> {p.category}</p>
            <p>{p.description}</p>
            <p>
              ⭐ <strong>{p.rating.rate}</strong> ({p.rating.count} reviews)
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
