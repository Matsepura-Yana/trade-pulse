import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EmailVerificationPage = () => {
	const [timeLeft, setTimeLeft] = useState(90)
	const [resendAvailable, setResendAvailable] = useState(false)
	const navigate = useNavigate()

	// Получение текущего пользователя
	const currentUser = JSON.parse(localStorage.getItem('currentUser'))

	useEffect(() => {
		if (!currentUser) {
			alert('Пользователь не найден. Перенаправление на главную страницу.')
			navigate('/')
			return
		}

		// Показ алерта
		const confirmed = window.confirm(
			`Письмо с подтверждением отправлено на ${currentUser.email}. Нажмите 'OK' после подтверждения.`
		)

		if (confirmed) {
			navigate('/verify-id')
		}
	}, [navigate, currentUser])

	// Обратный отсчет
	useEffect(() => {
		if (timeLeft === 0) {
			setResendAvailable(true)
			return
		}

		const intervalId = setInterval(
			() => setTimeLeft((prevTime) => prevTime - 1),
			1000
		)
		return () => clearInterval(intervalId)
	}, [timeLeft])

	const handleResendEmail = () => {
		setTimeLeft(90)
		setResendAvailable(false)
		alert('Письмо отправлено повторно. Проверьте ваш email.')
	}

	if (!currentUser) return null

	return (
		<div style={{ textAlign: 'center', padding: '20px' }}>
			<h1>Подтверждение Email</h1>
			<p>На ваш email отправлено письмо. Подтвердите вашу почту.</p>
			<p>Если вы не получили письмо, проверьте папку "Спам".</p>
			{resendAvailable ? (
				<button onClick={handleResendEmail}>Отправить новое письмо</button>
			) : (
				<p>Осталось времени: {timeLeft} секунд</p>
			)}
		</div>
	)
}

export default EmailVerificationPage
