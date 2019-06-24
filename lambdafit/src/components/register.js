import React from 'react';

export default function Register({ props }) {
	console.log(props);

	const nameRef = React.createRef();
	const passRef = React.createRef();

	const onSignIn = () => {
		props.registerUser({ username: nameRef, password: passRef });
	};

	return (
		<div>
			<div>
				<input type="text" placeholder="username" ref={nameRef} />
			</div>

			<div>
				<input type="password" placeholder="password" ref={passRef} />
			</div>

			<button type="submit" onClick={onSignIn}>
				Sign In
			</button>

			<div>
				{props.test}
				{props.exercises}
				{props.registeringUser}
				{props.token}
				{props.error}
			</div>
		</div>
	);
}
