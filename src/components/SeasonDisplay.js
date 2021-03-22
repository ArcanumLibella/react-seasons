import React from 'react'
import './SeasonDisplay.css'

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat < 0 ? 'winter' : 'summer'
  }
}

const seasonConfig = {
  summer: {
    text: 'Let\'s go to the beach !',
    iconName: 'sun'
  },
  winter: {
    text: 'Burr, it is chilly !',
    iconName: 'winter'
  }
}

export default function SeasonDisplay (props) {
  const season = getSeason(props.lat, new Date().getMonth())
  const { text, iconName } = seasonConfig[season]

  return (
    <div>
      <h1>Season</h1>
      <div className='container'>
        <i className={`${iconName} icon-left huge icon`} />
        <h3>{text}</h3>
        <i className={`${iconName} icon-right huge icon`} />
      </div>
    </div>
  )
}
