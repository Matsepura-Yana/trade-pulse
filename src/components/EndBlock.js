import React from 'react'
import '../styles/EndBlock.css'
import { Link } from 'react-router-dom'

const EndBlock = () => {
	return (
		<div className='end-block'>
			<h1 className='end-block-title'>Начни уже сейчас!</h1>
			<p className='end-block-subtitle'>
				Начни свой путь в трейдинге уже сейчас, действуй
			</p>
			<div className='end-block-arrow'></div>
			<Link to='/register'>
				<button className='end-block-button'>Зарегистрироваться</button>
			</Link>
		</div>
	)
}

export default EndBlock
