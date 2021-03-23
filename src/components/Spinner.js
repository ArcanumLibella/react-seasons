import React from 'react'

export default function Spinner (props) {
  return (
    <div class='ui active inverted dimmer'>
      <div class='ui text loader'>{props.message}</div>
    </div>
  )
}

Spinner.defaultProps = {
  message: 'Loading...'
}
