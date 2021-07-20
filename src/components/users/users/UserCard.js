import defaultUserPic from './user.png';

import { Card, Button } from "react-bootstrap";

const UserCard = (props) => {
    return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={defaultUserPic} />
    <Card.Body>
      <Card.Title>{props.user.email}</Card.Title>
      <Card.Text>
        {props.user.first_name} {props.user.last_name}
      </Card.Text>
      <Button variant="primary">Edit</Button>
      <Button variant="danger">Delete</Button>

    </Card.Body>
  </Card>
  )
}

export default UserCard;