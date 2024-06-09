import React from 'react';
import heartIcon from '../../assets/ic_heart_items.svg';

const BestProductItem = ({ imgUrl, name, price, favoriteCount }) => {
  return (
    <>
      <img src={imgUrl} alt="아이템이미지" className="item-img" />
      <h3 className="item-name">{name}</h3>
      <div className="item-price">{price.toLocaleString()}</div>
      <div className="item-favorite">
        <img src={heartIcon} alt="좋아요아이콘" />
        <span>{favoriteCount}</span>
      </div>
    </>
  );
};

export default BestProductItem;
