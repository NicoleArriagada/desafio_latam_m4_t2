
import { Card, Button } from 'react-bootstrap';
import formatPrice from '../helpers/formatPrice';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="col-md-4 mb-4">
      <Card>
        <Card.Img variant="top" src={img} style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <strong>Ingredientes:</strong><br />
            {ingredients.map((ing, i) => (
              <span key={i}>🍕 {ing}{i < ingredients.length - 1 ? ', ' : ''}</span>
            ))}
          </Card.Text>
          <h5>Precio: ${formatPrice(price)}</h5>
          <div className="d-flex justify-content-between mt-2">
            <Button variant="secondary">Ver Más 🍕</Button>
            <Button variant="dark">Añadir 🛒</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardPizza;
