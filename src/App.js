import React, { useState, useEffect } from 'react'
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom'
import HomePage from './pages/HomePage.js'
import RegisterPage from './pages/RegisterPage.js'
import LoginPage from './pages/LoginPage.js'
import SignalPage from './pages/SignalPage.js'
import ProfilePage from './pages/ProfilePage.js'
import EmailVerificationPage from './pages/EmailVerificationPage.js'
import PocketOptionIdPage from './pages/PocketOptionIdPage.js'

function App() {
	const [user, setUser] = useState(null)

	// Загрузка пользователя из локального хранилища при загрузке
	useEffect(() => {
		const savedUser = localStorage.getItem('currentUser')
		if (savedUser) {
			setUser(JSON.parse(savedUser))
		}
	}, [])

	return (
		<Router>
			<Routes>
				<Route path='/' element={<HomePage user={user} />} />
				<Route
					path='/register'
					element={<RegisterPage user={user} setUser={setUser} />}
				/>
				<Route
					path='/login'
					element={<LoginPage user={user} setUser={setUser} />}
				/>
				<Route
					path='/signals'
					element={user ? <SignalPage /> : <Navigate to='/' />}
				/>
				<Route
					path='/profile'
					element={
						user ? (
							<ProfilePage user={user} setUser={setUser} />
						) : (
							<Navigate to='/' />
						)
					}
				/>
				<Route
					path='/email-verification'
					element={<EmailVerificationPage user={user} />}
				/>
				<Route
					path='/verify-id'
					element={<PocketOptionIdPage user={user} setUser={setUser} />}
				/>
			</Routes>
		</Router>
	)
}

export default App
