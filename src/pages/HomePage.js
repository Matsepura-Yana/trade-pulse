import React from 'react'
import OurStatistic from '../components/OurStatistic.js'
import StartEarning from '../components/StartEarning.js'
import MainScreen from '../components/MainScreen.js'
import Header from '../components/Header.js'
import HowToEarn from '../components/HowToEarn.js'
import QuoteBlock from '../components/QuoteBlock.js'
import EndBlock from '../components/EndBlock.js'

const HomePage = ({ user }) => {
	return (
		<div>
			<Header />
			<MainScreen user={user} />
			<OurStatistic />
			<StartEarning user={user} />
			<HowToEarn />
			<QuoteBlock />
			<EndBlock user={user} />
		</div>
	)
}

export default HomePage
