import React from 'react'
import '../styles/QuoteBlock.css'

const QuoteBlock = () => {
	return (
		<div className='quote-block'>
			<div className='line top-line'></div>
			<p className='quote-text'>
				Трейдинг — это путь к финансовой свободе: анализируй,
				<br />
				действуй, достигай!
			</p>
			<div className='line bottom-line'></div>
		</div>
	)
}

export default QuoteBlock
