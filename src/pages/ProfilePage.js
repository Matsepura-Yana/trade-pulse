import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ProfilePage = ({ user, setUser }) => {
	const navigate = useNavigate()
	const [newPassword, setNewPassword] = useState('')
	const [message, setMessage] = useState('')

	const handleLogout = () => {
		setUser(null)
		localStorage.removeItem('currentUser') // Удаляем текущего пользователя
		navigate('/') // Перенаправляем на главную страницу
	}

	const handleChangePassword = () => {
		if (!newPassword.trim()) {
			setMessage('Пароль не может быть пустым.')
			return
		}

		// Получаем пользователей из localStorage
		const users = JSON.parse(localStorage.getItem('users')) || []

		// Находим и обновляем текущего пользователя
		const updatedUsers = users.map((u) =>
			u.email === user.email ? { ...u, password: newPassword } : u
		)

		// Сохраняем обновления в localStorage
		localStorage.setItem('users', JSON.stringify(updatedUsers))

		// Обновляем текущего пользователя в памяти
		const updatedCurrentUser = { ...user, password: newPassword }
		setUser(updatedCurrentUser)
		localStorage.setItem('currentUser', JSON.stringify(updatedCurrentUser))

		setMessage('Пароль успешно обновлен.')
		setNewPassword('')
	}

	if (!user) {
		return <p>Пожалуйста, войдите в аккаунт, чтобы просмотреть профиль.</p>
	}

	return (
		<div>
			<h1>Профиль пользователя</h1>
			<p>
				<strong>Email:</strong> {user.email}
			</p>
			<p>
				<strong>Пароль:</strong> {user.password}
			</p>

			<h2>Изменить пароль</h2>
			<div>
				<label>
					Новый пароль:
					<input
						type='password'
						value={newPassword}
						onChange={(e) => setNewPassword(e.target.value)}
						placeholder='Введите новый пароль'
					/>
				</label>
				<button onClick={handleChangePassword}>Сохранить новый пароль</button>
			</div>
			{message && <p style={{ color: 'green' }}>{message}</p>}

			<br />
			<button onClick={handleLogout}>Выйти</button>
		</div>
	)
}

export default ProfilePage
