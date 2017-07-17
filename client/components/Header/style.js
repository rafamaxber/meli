import * as variables from '../MainLayout/styleGlobal'

export const HeaderStyle = `
  .main_header {
    padding: 10px 0;
    background-color: ${variables.meliColor};
  }
`

export const LogoStyle = `
  .logo {
    display: inline-block;
    font-size: 0;
    vertical-align: middle;
  }
  @media (max-width: 530px) {
    .logo {
      display: block;
      text-align: center;
      margin-bottom: 10px;
    }
  }
`
