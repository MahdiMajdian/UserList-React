import React from "react"
import AddUser from "./components/Users/AddUser"
import UsersList from "./components/Users/UsersList"

function App() {
	let users = [
		{ name: "max", age: 42 },
		{ name: "david", age: 69 },
	]
	return (
		<>
			<AddUser />
			<UsersList users={users} />
		</>
	)
}

export default App
