import * as variables from '../MainLayout/styleGlobal'
export const BreadCrumbsStyle = `
  .breadcrumb {
    font-size: 14px;
    padding: ${variables.paddingBase} 0;
    color: ${variables.lv3Color};
  }

  .breadcrumb-list {
    margin: 0 0 0 0;
    padding: 0 0 0 0;
  }
  
  .breadcrumb-item {
    display: inline-block;
    list-style-type: none;
    vertical-align: middle;
    cursor: default;
  }

  .breadcrumb-item:last-child {
    font-weight: bold;
  }

  .breadcrumb-item svg {
    margin: 0 5px;
    vertical-align: bottom;
    display: inline-block;
  }
`