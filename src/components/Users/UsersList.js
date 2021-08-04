import React from "react"
import Card from "../UI/Card"
import styles from "./UsersList.module.css"

const UsersList = (props) => {
	let listItems = <h2>404 User not found</h2>
	if (props.users.length) {
		listItems = props.users.map((item) => (
			<li key={item.id}>
				{item.name} ({item.age} years old)
			</li>
		))
	}
	return (
		<Card className={styles.users}>
			<ul>{listItems}</ul>
		</Card>
	)
}

export default UsersList
