import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const RegisterPage = ({ setUser }) => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [error, setError] = useState('')
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()

		if (password !== confirmPassword) {
			setError('Пароли не совпадают!')
			return
		}

		// Создаем нового пользователя
		const newUser = {
			id: Date.now(),
			email,
			password,
		}

		// Получаем список пользователей и добавляем нового
		const users = JSON.parse(localStorage.getItem('users')) || []
		users.push(newUser)
		localStorage.setItem('users', JSON.stringify(users))

		// Сохраняем текущего пользователя
		setUser(newUser)
		localStorage.setItem('currentUser', JSON.stringify(newUser))

		navigate('/email-verification')
	}

	return (
		<div>
			<h1>Регистрация</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Email:
					<input
						type='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						required
					/>
				</label>
				<br />
				<label>
					Пароль:
					<input
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						required
					/>
				</label>
				<br />
				<label>
					Повторите пароль:
					<input
						type='password'
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
					/>
				</label>
				<br />
				{error && <p style={{ color: 'red' }}>{error}</p>}
				<button type='submit'>Зарегистрироваться</button>
			</form>
			<h4>
				Уже есть аккаунт?<Link to='/login'>Войти</Link>
			</h4>
		</div>
	)
}

export default RegisterPage
