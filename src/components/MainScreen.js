import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/MainScreen.css'

const MainScreen = ({ user }) => {
	return (
		<div className='artboard-main-screen'>
			<div className='content-mainscreen'>
				<h1>
					Инновационный <br />
					сервис для <span id='trading-span'>трейдинга</span>
				</h1>
				<p>Откройте мир трейдинга прямо сейчас</p>

				{user ? (
					<div>
						<Link to='/signals'>
							<button className='mainscreen-button' id='signal'>
								СИГНАЛ
							</button>
						</Link>
					</div>
				) : (
					<div>
						<Link to='/register'>
							<button className='mainscreen-button'>АВТОРИЗАЦИЯ</button>
						</Link>
					</div>
				)}
			</div>
		</div>
	)
}

export default MainScreen
