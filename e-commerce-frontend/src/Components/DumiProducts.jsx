import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CartContext } from "../service/CartProvider";

function DumiProducts() {
  let products = [
    {
      id: 1,
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzEHRe6qwUg__61qgldYKbyvMS6yhDdyTHLQ&s",
      title: "Cloths",
    },
    {
      id: 2,
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYFHqubsxgEDlbHQy-DqJ7gpEX8Honnsv9cQ&s",
      title: "laptops",
    },
    {
      id: 3,
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu40lyAEF3ePk1CS3swYqngcJIBufVRo1ouA&s",
      title: "Mobiles",
    },
    {
      id: 4,
      imageSrc:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcEnHaxGDq08atEEjHNYlHsfEeHXzVw2zeOQ&s",
      title: "Shoes",
    },
  ];

  const { items, addToCart } = useContext(CartContext);

  return (
    <Row xs={1} md={4} className="g-4">
      {products.map((item, idx) => {
      const isPresent= items.some((product)=>product.id==item.id);
      
        return (
          <Col key={idx}>
            <Card>
              <Card.Img
                variant="top"
                src={item.imageSrc}
                height="290px"
                width="190px"
              />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <button
                  className="btn btn-warning"
                  onClick={() => addToCart(item)}
                  disabled={isPresent?true:false}
                >
                  Add To card
                </button>
                <button className="btn btn-success mx-2">Buy</button>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default DumiProducts;