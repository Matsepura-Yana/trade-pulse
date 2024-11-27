import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LoginPage = ({ setUser }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(null)
	const navigate = useNavigate()

	const handleLogin = (e) => {
		e.preventDefault()

		// Получаем список пользователей из localStorage
		const users = JSON.parse(localStorage.getItem('users')) || []

		// Ищем пользователя по email
		const existingUser = users.find((user) => user.email === email)

		if (existingUser) {
			// Проверяем пароль
			if (existingUser.password === password) {
				setUser(existingUser)
				localStorage.setItem('currentUser', JSON.stringify(existingUser)) // Устанавливаем текущего пользователя
				navigate('/')
			} else {
				setError('Неверный пароль.')
			}
		} else {
			setError('Пользователь не найден.')
		}
	}

	return (
		<div>
			<h1>Вход</h1>
			<form onSubmit={handleLogin}>
				<div>
					<label>
						Email:
						<input
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>
					</label>
				</div>
				<div>
					<label>
						Пароль:
						<input
							type='password'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>
					</label>
				</div>
				{error && <p style={{ color: 'red' }}>{error}</p>}
				<button type='submit'>Войти</button>
			</form>
		</div>
	)
}

export default LoginPage
