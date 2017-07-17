export const meliColor = '#ffe600'
export const bgColor = '#eeeeee'
export const lv1Color = '#333333'
export const lv2Color = '#666666'
export const lv3Color = '#999999'
export const shopColor = '#3483fa'
export const paddingBase = '16px'
export const paddingLarge = '32px'
export const borderRadius = '3px'
export const limits = `
    max-width: 980px;
    width: 100%;
    margin: 0 auto;`

export const MainLayoutStyleGlobal = `
  *, 
  :after, 
  :before {
    box-sizing: border-box;
  }
  body {
    font-family: "Proxima Nova",-apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
    background-color: ${bgColor};
    margin: 0;
    color: ${lv1Color};
  }
  .content {
    border-radius: ${borderRadius};
    background-color: #ffffff;
    ${limits}
  }
  .limits {
    ${limits}
  }
`