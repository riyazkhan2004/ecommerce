import React from 'react'

export  function Helmet(props) {
    document.title='Matchforest-'+props.title;
  return (
    <div className="w-100">{props.children}</div>
  )
}
