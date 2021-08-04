import React, { useState } from "react"
import AddUser from "./components/Users/AddUser"
import UsersList from "./components/Users/UsersList"

function App() {
	const [users, setUsers] = useState([
		{id: Date.now() , name: "max", age: 42 },
		
	])
	
	
	const subminHandler = (user) => {
	setUsers([user , ...users])
	}
	return (
		<>
			<AddUser submitHandler={subminHandler}/>
			<UsersList users={users} />
		</>
	)
}

export default App
