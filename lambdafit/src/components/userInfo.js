import React from 'react';

export default function UserInfo(props) {
	const ageRef = React.createRef();
	const weightRef = React.createRef();
	const heightRef = React.createRef();
	const genderRef = React.createRef();
	const emailRef = React.createRef();

	const onUpdateUserInfo = () => {
		const existingUser = {
			// id: props.id,
			// username: nameRef.current.value,
			age: ageRef.current.value,
			weight: weightRef.current.value,
			height: heightRef.current.value,
			gender: genderRef.current.value,
			email: emailRef.current.value,
		};
		console.log(existingUser);
		props.updateUserInfo(props.id, existingUser);
	};

	if (props.user[0]) {
		return (
			<div>
				<label>
					my ID
					<span>{props.id}</span>
				</label>
				<label>
					my name
					<span>{props.user[0].username}</span>
				</label>
				<label>
					my age
					<input type="number" ref={ageRef} placeholder={props.user[0].age} />
				</label>
				<label>
					my weight
					<input
						type="number"
						ref={weightRef}
						placeholder={props.user[0].weight}
					/>
				</label>
				<label>
					my height
					<input
						type="number"
						ref={heightRef}
						placeholder={props.user[0].height}
					/>
				</label>
				<label>
					my gender
					<input
						type="text"
						ref={genderRef}
						placeholder={props.user[0].gender}
					/>
				</label>
				<label>
					my email
					<input type="text" ref={emailRef} placeholder={props.user[0].email} />
				</label>

				<button onClick={onUpdateUserInfo}>Update My Info</button>
			</div>
		);
	} else {
		return null;
	}
}
