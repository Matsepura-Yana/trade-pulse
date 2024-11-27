import React, { useState } from 'react'

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState(null)
	const questions = [
		{ q: 'Вопрос 1?', a: 'Ответ на вопрос 1. Это временный текст.' },
		{ q: 'Вопрос 2?', a: 'Ответ на вопрос 2. Это временный текст.' },
	]

	const toggleAnswer = (index) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<div>
			<h2>Часто задаваемые вопросы</h2>
			{questions.map((item, index) => (
				<div key={index}>
					<p onClick={() => toggleAnswer(index)} style={{ cursor: 'pointer' }}>
						{item.q}
					</p>
					{openIndex === index && <p>{item.a}</p>}
				</div>
			))}
		</div>
	)
}

export default FAQ
