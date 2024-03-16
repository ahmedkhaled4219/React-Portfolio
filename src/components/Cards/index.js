import "./style.css";
import { Card } from "react-bootstrap";
export default function Card1(props) {
  return (
    <div>
      <Card className={props.color === "dark" ? "dark-card" : "secondary-card"}>
        <Card.Title className="text-center">{props.title}</Card.Title>
      </Card>
    </div>
  );
}
