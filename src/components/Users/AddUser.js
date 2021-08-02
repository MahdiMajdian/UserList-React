import React from "react"
import Button from "../UI/Button"
import Card from "../UI/Card"
import styles from "./AddUser.module.css"

const AddUser = () => {
	return (
		<Card className={styles.input}>
			<form>
				<label>Username</label>
				<input type="text"></input>
				<label>Age (Years)</label>
				<input type="number"></input>
				<Button type="submit">Add User</Button>
			</form>
		</Card>
	)
}

export default AddUser
