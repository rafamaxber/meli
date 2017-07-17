import * as variables from '../MainLayout/styleGlobal'
export const SearchBarStyle = `
  .search_bar {
    display: inline-block;
    max-width: 900px;
    vertical-align: middle;
    left: 26px;
    width: 90%;
    position: relative;
  }
  .search_input {
    height: 35px;
    padding: 10px;
    width: 95.5%;
    border: none;
    border-radius: ${variables.borderRadius} 0 0 ${variables.borderRadius};
  }
  @media (max-width: 939px) {
    .search_input {
      width: 85%;
    }
  }
  .search_input::placeholder {
    font-size: 18px;
    color: ${variables.lv3Color};
    padding-top: 2px;
    position: relative;
  }
  .search_input:focus {
    outline: none;
    box-shadow: -2px 1px 10px -5px ${variables.lv1Color};
  }
  .search_button {
    border: none;
    cursor: pointer;
    background-color: ${variables.bgColor};
    border-radius: 0 ${variables.borderRadius} ${variables.borderRadius} 0;
    padding: 10px;
    display: inline-block;
    vertical-align: middle;
    font-size: 0;
    height: 35px;
    position: relative;
  }
  `
