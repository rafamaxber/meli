import * as variables from '../MainLayout/styleGlobal'
export const ItemsStyle = `
  .card-item {
    display: flex;
    padding-top: ${variables.paddingBase};
    position: relative;
    padding-bottom: ${variables.paddingBase};
  }

  .card-item:after {
    content: "";
    background-color: ${variables.bgColor};
    display: block;
    height: 1px;
    width: 95%;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }

  .card-item-description {
    width: 572px;
  }

  .card-item-image,
  .card-item-description,
  .card-item-location {
    padding-left: ${variables.paddingBase};
  }

  .card-item-description,
  .card-item-location {
    padding-top: ${variables.paddingBase};
  }

  .card-item-location {
    font-size: 12px;
    max-width: 160px;
  }
  
  .card-item-location-name {
    position: relative;
    top: 25px;
  }

  .card-item-image {
    width: 180px;
    cursor: pointer;
    height: 180px;
    overflow: hidden;
    border-radius: 4px;
    left: -2px;
    top: 2px;
  }
  .card-item-image img {
    width: 100%;
  }
  .card-item-price {
    font-size: 24px;
    margin-bottom: ${variables.paddingLarge};
  }
  .card-item-title {
    font-size: 18px;
  }
  .card-item-title__link {
    color: inherit;
    text-decoration: none;
  }

`

export const ItemStyle = `
  .card-hero-item-image-container {
    position: relative;
    padding-top: ${variables.paddingBase};
    padding-bottom: ${variables.paddingBase};
    float: left;
    text-align: center;
    max-width: 680px;
    width: 70%;
    margin: 0 0 0 0;
  }
  .card-hero-item-image {
    width: auto;
    max-width: 100%;
  }

  .card-hero-item-info {
    float: right;
    max-width: 300px;
    width: 30%;
    padding-right: ${variables.paddingLarge};
    padding-top: ${variables.paddingLarge};
  }

  .card-item-sold-info {
    font-size: 14px;
    padding-bottom: ${variables.paddingBase};
  }

  .card-hero-item-title {
    font-size: 24px;
    padding-bottom: ${variables.paddingLarge};
  }

  .card-hero-item-price {
    font-size: 46px;
    padding-bottom: ${variables.paddingLarge};
  }

  .card-hero-item-description {
    padding: ${variables.paddingLarge};
    clear: both;
  }

  .card-hero-item-description-title {
    font-size: 28px;
  }

  .card-hero-item-description-text {
    font-size: 16px;
  }

  .card-hero-item-description-text:after {
    content: '.';
    clear: both;
    height: 0;
    width: 100%;
    display: block;
    visibility: hidden;
  }

  .shop-button {
    background-color: ${variables.shopColor};
    display: block;
    padding: ${variables.paddingBase};
    text-align: center;
    color: #fff;
    font-size: 14px;
    border-radius: ${variables.borderRadius};
    cursor: pointer;
  }
`