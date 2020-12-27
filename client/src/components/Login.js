import React, { useRef, Fragment } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { v4 as uuidV4 } from 'uuid';

const Login = ({ onIdSubmit }) => {
	const idRef = useRef();

	function handleSubmit(e) {
		e.preventDefault();
		onIdSubmit(idRef.current.value);
	}

	return (
		<Fragment>
			<Container
				className="align-items-center d-flex"
				style={{ height: '100vh' }}
			>
				<Form onSubmit={handleSubmit} className="w-100">
					<Form.Group>
						<Form.Label>Enter Your Id</Form.Label>
						<Form.Control type="text" ref={idRef} required />
					</Form.Group>
					<Button type="submit" className="mr-2">
						Login
					</Button>
					<Button variant="secondary">Create A New Id</Button>
				</Form>
			</Container>
		</Fragment>
	);
};

export default Login;
