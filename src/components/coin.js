import React from 'react';

const Coin = ({
  marketRank,
  coinSymbol,
  currentPrice,
  priceChange,
  totalVolume,
  marketCap,
  imageUrl,
  coinName,
}) => {
  return (
    <div className="heading coins">
      <p className="first hide-mobile">{marketRank}</p>
      <div className="my-coin">
        <div className="symbol">
          <img src={imageUrl} alt={coinName} className="img" />
          <p className="hide-mobileIpad">{coinSymbol.toUpperCase()}</p>
          <i className="uil uil-arrow-circle-right next-btn  border: 2px solid red; hide-desktop mobileNext"></i>
        </div>
        <div className="next">
          <p className="coin-name">{coinName.toUpperCase()}</p>
          <i className="uil uil-arrow-circle-right next-btn hide-mobile"></i>
        </div>
      </div>
      <p className="width hide-mobile">${currentPrice.toLocaleString()}</p>
      <p className="width hide-mobile">{priceChange.toFixed(2)}%</p>
      <p className="hide-mobile width">${totalVolume.toLocaleString()}</p>
      <p className="hide-mobile width">${marketCap.toLocaleString()}</p>
    </div>
  );
};

export default Coin;
