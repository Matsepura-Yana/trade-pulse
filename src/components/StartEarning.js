import React, { useEffect, useState } from 'react'
import '../styles/StartEarning.css' // Подключаем стили
import { Link } from 'react-router-dom'
import startEarningImage from '../images/start earning.png'

const StartEarning = () => {
	const [currentUser, setCurrentUser] = useState(null) // Локальное состояние для пользователя
	const [isLoading, setIsLoading] = useState(true) // Добавляем состояние загрузки

	useEffect(() => {
		// Загружаем пользователя из локального хранилища
		const userData = JSON.parse(localStorage.getItem('currentUser'))
		setCurrentUser(userData)
		setIsLoading(false) // Загрузка завершена
	}, [])
	return (
		<div className='start-earning'>
			<h1 className='start-earning-header'>
				Начните зарабатывать уже <span className='highlight'>сегодня</span>
			</h1>
			<div className='start-earning-content'>
				<div className='image-container'>
					<img
						src={startEarningImage}
						alt='Img'
						className='start-earning-image'
						height='508px'
					/>
				</div>
				<div className='text-container'>
					<p className='main-text'>
						Мы используем искусственный интеллект, чтобы ваши сигналы
						<br /> были максимально точными.
					</p>
					<p className='secondary-text'>
						Ваш результат — наша <br />
						репутация.
					</p>
					<p className='description-text'>
						Наши технологии помогают вам принимать решения быстрее и <br />{' '}
						увереннее. Положитесь на силу современных технологий, чтобы <br />{' '}
						ваши финансовые результаты были стабильными и успешными.
					</p>
					{currentUser ? (
						<Link to='/signal' className='auth-link'>
							<button className='auth-button'>СИГНАЛ</button>
						</Link>
					) : (
						<Link to='/register' className='auth-link'>
							<button className='auth-button'>АВТОРИЗАЦИЯ</button>
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}

export default StartEarning
