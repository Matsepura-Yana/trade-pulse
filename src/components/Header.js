import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
import closeIcon from '../images/close icon.svg'
import logo from '../images/logo.png'

const Header = ({ user }) => {
	const [isMenuOpen, setMenuOpen] = useState(false)
	const [isScrolled, setScrolled] = useState(false)
	const [isClosing, setIsClosing] = useState(false)
	const [isLoading, setIsLoading] = useState(true) // Добавляем состояние загрузки
	const [currentUser, setCurrentUser] = useState(null) // Локальное состояние для пользователя

	useEffect(() => {
		// Загружаем пользователя из локального хранилища
		const userData = JSON.parse(localStorage.getItem('currentUser'))
		setCurrentUser(userData)
		setIsLoading(false) // Загрузка завершена
	}, [])

	const toggleMenu = () => {
		if (isMenuOpen) {
			// Если модалка открыта, запускаем анимацию закрытия
			setIsClosing(true)
			setTimeout(() => {
				setMenuOpen(false) // Закрываем меню после окончания анимации
				setIsClosing(false) // Сброс состояния анимации
			}, 200) // Время анимации закрытия (200ms)
		} else {
			setMenuOpen(true)
		}
	}

	// Обработчик прокрутки
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setScrolled(true)
			} else {
				setScrolled(false)
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	if (isLoading) {
		// Отображаем состояние загрузки
		return <div>Загрузка...</div>
	}

	return (
		<>
			<header className={`header ${isScrolled ? 'scrolled' : ''}`}>
				<Link to='/' className='header-logo'>
					<img src={logo} alt='Logo' height='50px' />
				</Link>

				{/* Бургер-меню */}
				<div className={`burger-menu`} onClick={toggleMenu}>
					<div className='bar'></div>
					<div className='bar'></div>
					<div className='bar'></div>
				</div>
			</header>

			{/* Условный рендеринг модалки */}
			{isMenuOpen && (
				<div className={`modal-overlay ${isClosing ? 'closing' : ''}`}>
					<div className='modal-content' onClick={(e) => e.stopPropagation()}>
						{/* Проверяем авторизацию */}
						{currentUser ? (
							<Link to='/signals'>
								<h1 className='modal-button'>Сигнал</h1>
							</Link>
						) : (
							<Link to='/register'>
								<h1 className='modal-button'>Сигнал</h1>
							</Link>
						)}
						{currentUser ? (
							<Link to='/profile'>
								<h1 className='modal-button'>Профиль</h1>
							</Link>
						) : (
							<div></div>
						)}
						<h1 className='modal-button'>Вопросы</h1>
						<h1 className='modal-button'>О нас</h1>
					</div>
					{/* Крестик для закрытия модалки в правом верхнем углу */}
					<div className='close-button'>
						<img
							src={closeIcon}
							alt='close icon'
							onClick={toggleMenu}
							width='36px'
						/>
					</div>
				</div>
			)}
		</>
	)
}

export default Header
