import React from 'react'
import '../styles/HowToEarn.css'

const HowToEarn = () => {
	return (
		<div className='how-to-earn'>
			<h2 className='title'>
				Как <span>зарабатывать?</span>
			</h2>

			<div className='steps'>
				{/* Блок 1 */}
				<div className='step'>
					<div className='circle'>1</div>
					<h3 className='step-title'>Создать аккаунт</h3>
					<p className='step-description'>Пройдите регистрацию на сайте</p>
				</div>

				{/* Блок 2 */}
				<div className='step'>
					<div className='circle'>2</div>
					<h3 className='step-title'>Зарегистрироваться на брокере</h3>
					<p className='step-description'>
						Для того чтобы начать зарабатывать, вам нужен аккаунт <br />
						на провереном брокере Pocket Option
					</p>
				</div>

				{/* Блок 3 */}
				<div className='step'>
					<div className='circle'>3</div>
					<h3 className='step-title'>Получите первый сигнал</h3>
					<p className='step-description'>
						Пройдите все легкие этапы подключения и получите свой
						<br /> первый сигнал и заработайте на нем
					</p>
				</div>
			</div>
		</div>
	)
}

export default HowToEarn
