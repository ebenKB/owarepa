import React from 'react'
import Tile from './Tile';
import styles from '../styles/FeatureItem.module.css';

const FeatureItem = ({ caption, description, imageUrl }) => {
  return (
    <Tile classes={styles.item}>
      <h1 className="text-4xl text-center">{caption}</h1>
      <div className={`text-center content_text w-full`}>
        <img src={imageUrl} alt="" className="w-20 pt-10 pb-10 m-auto"/>
        <p>{description}</p>
      </div>
    </Tile>
  )
}

export default FeatureItem
