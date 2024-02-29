import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import cardImg from "../assets/images/suit-monkey.jpg";
import Product from "../pages/Product";
import { NavLink } from "react-router-dom";
import { data } from "../db/ProductDB";
function ProductCard({ product }) {
  // const {id, title, price, desc, image} = data;
  return (
    <Card style={{ width: "18rem", height: "25rem", textAlign: "left" }}>
      <Card.Img
        variant="top"
        src={product?.image}
        style={{ width: "100%", height: "200px" }}
      />
      <Card.Body>
        <Card.Title>{product?.title}</Card.Title>
        <Card.Text>{product?.desc}</Card.Text>
        <Card.Text>{product?.price}</Card.Text>
        <Button variant="primary">Not For Sale</Button>
        <Button variant="warning" className="ms-4">
          <NavLink
            to={`/product/${product?.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            view
          </NavLink>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
