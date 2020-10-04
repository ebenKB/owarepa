import React from 'react'
import Tile from './Tile';

const FeatureItem = ({ caption, description, imageUrl }) => {
  return (
    <Tile>
      <h1 className="text-4xl text-center">{caption}</h1>
      <div className="text-center w-full">
        <img src={imageUrl} alt="" className="w-20 pt-10 pb-10 m-auto"/>
        <p>{description}</p>
      </div>
    </Tile>
  )
}

export default FeatureItem
