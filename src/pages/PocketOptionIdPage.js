import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/PocketOptionIdPage.css'
import pocketOptionLogo from '../images/pocket option logo.png'

const PocketOptionIdPage = () => {
	const [id, setId] = useState('')
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [success, setSuccess] = useState('')
	const navigate = useNavigate()

	const currentUser = JSON.parse(localStorage.getItem('currentUser'))

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsLoading(true)
		setError('')
		setSuccess('')

		try {
			let response, data

			// Первая попытка проверки ID
			response = await fetch(
				'https://confirm-id-bot-server-3f3d7c52ef50.herokuapp.com/verify-id',
				{
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ userId: id }),
				}
			)

			// Если ID не найден, делаем вторую попытку
			if (response.status === 404) {
				await new Promise((resolve) => setTimeout(resolve, 1000)) // Небольшая задержка перед повторной попыткой
				response = await fetch(
					'https://confirm-id-bot-server-3f3d7c52ef50.herokuapp.com/verify-id',
					{
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ userId: id }),
					}
				)
			}

			if (response.status === 500) {
				await new Promise((resolve) => setTimeout(resolve, 1000)) // Небольшая задержка перед повторной попыткой
				response = await fetch(
					'https://confirm-id-bot-server-3f3d7c52ef50.herokuapp.com/verify-id',
					{
						method: 'POST',
						headers: { 'Content-Type': 'application/json' },
						body: JSON.stringify({ userId: id }),
					}
				)
			}

			data = await response.json()

			// Обработка ответа
			if (response.ok && data.message === 'ID confirmed') {
				setSuccess('ID подтвержден!')
				const updatedUser = { ...currentUser, pocketOptionId: id }
				localStorage.setItem('currentUser', JSON.stringify(updatedUser))
				navigate('/')
			} else if (response.status === 404 || data.message === 'User not found') {
				setError('Пользователь не найден')
			} else {
				setError('Не удалось подтвердить ID. Попробуйте позже.')
			}
		} catch (err) {
			setError('Произошла ошибка при проверке ID. Попробуйте позже.')
			console.error('Ошибка:', err)
		} finally {
			setIsLoading(false)
		}
	}

	if (!currentUser) {
		alert('Пользователь не найден. Перенаправление на главную страницу.')
		navigate('/')
		return null
	}

	return (
		<div className='pocket-option-page'>
			<h1 className='register-broker-title'>Зарегистрироваться на брокере</h1>
			<p className='subtext'>
				Теперь вам нужно создать аккаунт на брокере Pocket Option
			</p>

			<div className='verification-container'>
				<h2 className='verification-title'>
					Вам нужно создать новый аккаунт на брокере, и дать нам ваш ID
				</h2>
				<p className='verification-text'>
					Так как мы не берем плату за использование нашего сайта, мы пользуемся
					партнерской программой Брокера Pocket Option, он выплачивает нам 3% с
					вашего оборота
				</p>

				<a
					href='https://po-ru1.click?utm_campaign=791890&utm_source=affiliate&utm_medium=sr&a=iD5XS2fotKsxuJ&ac=tradepulse'
					className='verification-button'
				>
					<img src={pocketOptionLogo} alt='Icon' height='53px' />
				</a>
				<p className='verification-disclaimer'>
					Нажимая на кнопку выше вы автоматически переходите по нашей
					партнерской ссылке
				</p>

				<p className='id-instruction'>
					После регистрации введите свой ID ниже (он находится в информации
					профиля)
				</p>

				<div className='id-input-container'>
					<input
						type='text'
						value={id}
						onChange={(e) => setId(e.target.value)}
						placeholder='ID 12345678'
						className='id-input'
					/>
					<button
						onClick={handleSubmit}
						className='verify-button'
						disabled={isLoading}
					>
						{isLoading ? 'Загрузка...' : 'ПРОВЕРИТЬ'}
					</button>
				</div>

				{error && <p className='error-message'>{error}</p>}
				{success && <p className='success-message'>{success}</p>}
			</div>
		</div>
	)
}

export default PocketOptionIdPage
