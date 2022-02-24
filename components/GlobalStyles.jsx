import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}*,::after,::before{box-sizing:border-box}

  :root {
    /* font-size: ${({ theme }) => theme.vertical}; */
    font-size: ${props => props.theme.rem.value};
  }

  body {
    font: ${props => props.theme.fonts.main};
    min-height: 100vh;
    background: ${props => props.theme.gradients.main};
    /* padding: ${props => {
      let { spacings } = props.theme
      let v = spacings.small
      let h = spacings.large
      return `${v} ${h}`
    }}; */
    padding: ${({ theme }) => theme.containerPadding.lg};

    @media ${props => props.theme.breakpoints.mobile} {
      padding: ${props => props.theme.spacings.medium};
    }
  }

  button {
    cursor: pointer;
  }

  .hidden {
    display: none;
  }

  sup {
    vertical-align: 17%;
    font-size: smaller;
  }

  @keyframes elementAppearance {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
