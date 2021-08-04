import React, { useState } from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"
import styles from "./AddUser.module.css"
import ErrorModal from "../UI/ErrorModal"
const AddUser = (props) => {
	const [username, setUsername] = useState("")
	const [age, setAge] = useState("")
	const [error, setError] = useState()

	const addUserHandler = (event) => {
		event.preventDefault()
		if (username.trim().length === 0) {
			setError({
				title: "Invalid Username",
				message: "Please fill the username field!",
			})
			return
		}
		if (+age < 0 || age === "") {
			setError({
				title: "Invalid Age",
				message: "Your Age need to be reviewed!",
			})
			return
		}
		props.submitHandler({ name: username, age: +age, id: Date.now() })
		setAge("")
		setUsername("")
	}
	const errorHandler = () => {
		setError(null)
	}

	return (
		<>
			{error && (
				<ErrorModal
					title={error.title}
					message={error.message}
					onConfirm={errorHandler}
				/>
			)}
			<Card className={styles.input}>
				<form onSubmit={addUserHandler}>
					<label>Username</label>
					<input
						type="text"
						value={username}
						onChange={(event) =>
							setUsername(event.target.value)
						}></input>
					<label>Age (Years)</label>
					<input
						type="number"
						value={age}
						onChange={(event) =>
							setAge(event.target.value)
						}></input>
					<Button type="submit">Add User</Button>
				</form>
			</Card>
		</>
	)
}

export default AddUser
