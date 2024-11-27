import React from 'react'
import '../styles/OurStatistic.css' // Подключение CSS файла для стилей
import statisticImage from '../images/statistic image.png'
import activeUsers from '../images/active users.png'
import lostSignals from '../images/lost signals.png'
import winSignals from '../images/win signals.png'

const OurStatistic = () => {
	return (
		<div id='all-content'>
			<div>
				<h1 id='our-statistic-header'>Наша статистика</h1>
				<h3 id='statistic-details-subheader'>
					Отчет о показателях сайта и сигналов за <br />
					<span id='last-month'>последний месяц:</span>
				</h3>
			</div>
			<div className='artboard-statistic'>
				<div className='content-statistic'>
					{/* Левая половина с блоками статистики */}
					<div className='stats'>
						<div className='stat'>
							<img
								className='stat-icon'
								src={activeUsers}
								alt='Активные пользователи'
							/>
							<div className='stat-info'>
								<span className='stat-number'>253</span>
								<p className='stat-description'>Активных пользователей</p>
							</div>
						</div>
						<div className='stat'>
							<img
								className='stat-icon'
								src={winSignals}
								alt='Плюсовые сделки'
							/>
							<div className='stat-info'>
								<span className='stat-number'>9876</span>
								<p className='stat-description'>Плюсовых сделок выдано</p>
							</div>
						</div>
						<div className='stat'>
							<img
								className='stat-icon'
								src={lostSignals}
								alt='Минусовые сделки'
							/>
							<div className='stat-info'>
								<span className='stat-number'>1343</span>
								<p className='stat-description'>Минусовых сделок выдано</p>
							</div>
						</div>
					</div>

					{/* Правая половина с большим изображением */}
					<div className='image-container'>
						<img
							className='large-image'
							src={statisticImage}
							alt='Иллюстрация'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default OurStatistic
