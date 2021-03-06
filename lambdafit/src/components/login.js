import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	width: auto;
	background-color: rgb(255, 183, 82, 0.9);
	color: rgb(3, 84, 16);
`;

const StyledInput = styled.input`
	font-size: 1.5rem;
	margin: 0.5rem;
`;

const StyledButton = styled.button`
	font-size: 1.5rem;
	margin: 0.5rem;
`;

export default function Login(props) {
	const nameRef = React.createRef();
	const passRef = React.createRef();

	const onLogIn = () => {
		const existingUser = {
			username: nameRef.current.value,
			password: passRef.current.value,
		};
		props.loggingInUser(existingUser);
	};

	return (
		<StyledContainer>
				<StyledInput type="text" placeholder="username" ref={nameRef} />

				<StyledInput type="password" placeholder="password" ref={passRef} />

			<StyledButton type="submit" onClick={onLogIn}>
				Log In
			</StyledButton>
		</StyledContainer>
	);
}
