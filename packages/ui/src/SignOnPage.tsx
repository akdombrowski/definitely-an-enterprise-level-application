export const SignOnPage = () => {
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            autoComplete="username"
          />
          <Form.Text className="text-muted">
            This will also be your username.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDifficultyLevel">
          <Form.Check
            inline
            label="1"
            name="group1"
            type="radio"
            id="inline-radio-1"
          />
          <Form.Check
            inline
            label="2"
            name="group1"
            type="radio"
            id="inline-radio-2"
          />
          <Form.Check
            inline
            label="3"
            name="group1"
            type="radio"
            id="inline-radio-3"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formButtons">
          <Button variant="primary" type="submit">
            Sign on
          </Button>

          <Button variant="primary" type="submit">
            Create a new account
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};
