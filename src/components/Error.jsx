import { Alert } from 'react-bootstrap';

function AlertDismissibleExample() {
      return (
        <Alert variant="danger">
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
                Unfortunately this place this does not yet exist.
          </p>
        </Alert>
      );
  }

export default AlertDismissibleExample;