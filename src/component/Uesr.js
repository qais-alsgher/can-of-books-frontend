import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Card from 'react-bootstrap/Card';

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div class="space">
        <Card style={{ width: '18rem' }} className="cardsPof">
          <Card.Img variant="top" src={user.picture} alt={user.name} />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
              {user.email}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    )
  );
};

export default Profile;