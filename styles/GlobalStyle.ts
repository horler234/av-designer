import { createGlobalStyle } from "styled-components";

/**
 * GlobalStyle: injects global CSS
 */

export const GlobalStyle = createGlobalStyle`
 @font-face {
   font-family: Lato;
   src: url("/fonts/Lato-Thin.ttf");
   font-weight: 100;
   font-display: swap;
 }
 @font-face {
   font-family: Lato;
   src: url("/fonts/Lato-Light.ttf");
   font-weight: 300;
   font-display: swap;
 }
 @font-face {
   font-family: Lato;
   src: url("/fonts/Lato-Regular.ttf");
   font-weight: 400;
   font-display: swap;
 }
 @font-face {
   font-family: Lato;
   src: url("/fonts/Lato-Bold.ttf");
   font-weight: 700;
   font-display: swap;
 }
 @font-face {
   font-family: Lato;
   src: url("/fonts/Lato-Black.ttf");
   font-weight: 900;
   font-display: swap;
 }
 @font-face {
   font-family: Lato;
   src: url("/fonts/Lato-ThinItalic.ttf");
   font-weight: 100;
   font-style: italic;
   font-display: swap;
 }
 @font-face {
   font-family: Lato;
   src: url("/fonts/Lato-LightItalic.ttf");
   font-weight: 300;
   font-style: italic;
   font-display: swap;
 }
 @font-face {
   font-family: Lato;
   src: url("/fonts/Lato-Italic.ttf");
   font-weight: 400;
   font-style: italic;
   font-display: swap;
 }
 @font-face {
   font-family: Lato;
   src: url("/fonts/Lato-BoldItalic.ttf");
   font-weight: 700;
   font-style: italic;
   font-display: swap;
 }
 @font-face {
   font-family: Lato;
   src: url("/fonts/Lato-BlackItalic.ttf");
   font-weight: 900;
   font-style: italic;
   font-display: swap;
 }

 @font-face {
   font-family: Roboto;
   src: url("/fonts/Roboto-Thin.ttf");
   font-weight: 100;
   font-display: swap;
 }

 @font-face {
   font-family: Roboto;
   src: url("/fonts/Roboto-Light.ttf");
   font-weight: 300;
   font-display: swap;
 }
 @font-face {
   font-family: Roboto;
   src: url("/fonts/Roboto-Regular.ttf");
   font-weight: 400;
   font-display: swap;
 }
 @font-face {
   font-family: Roboto;
   src: url("/fonts/Roboto-Medium.ttf");
   font-weight: 600;
   font-display: swap;
 }
 
 @font-face {
   font-family: Roboto;
   src: url("/fonts/Roboto-Bold.ttf");
   font-weight: 700;
   font-display: swap;
 }

 @font-face {
   font-family: Roboto;
   src: url("/fonts/Roboto-Black.ttf");
   font-weight: 900;
   font-display: swap;
 }

 @font-face {
   font-family: Roboto;
   src: url("/fonts/Roboto-ThinItalic.ttf");
   font-weight: 100;
   font-style: italic;
   font-display: swap;
 }
 
 @font-face {
   font-family: Roboto;
   src: url("/fonts/Roboto-LightItalic.ttf");
   font-weight: 300;
   font-style: italic;
   font-display: swap;
 }
 @font-face {
   font-family: Roboto;
   src: url("/fonts/Roboto-Italic.ttf");
   font-weight: 400;
   font-style: italic;
   font-display: swap;
 }
 @font-face {
   font-family: Roboto;
   src: url("/fonts/Roboto-MediumItalic.ttf");
   font-weight: 600;
   font-style: italic;
   font-display: swap;
 }

 @font-face {
   font-family: Roboto;
   src: url("/fonts/Roboto-BoldItalic.ttf");
   font-weight: 700;
   font-style: italic;
   font-display: swap;
 }
 
 @font-face {
   font-family: Roboto;
   src: url("/fonts/Roboto-BlackItalic.ttf");
   font-weight: 900;
   font-style: italic;
   font-display: swap;
 }
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }
 
   html, body {
     margin: 0;
     box-sizing: border-box;
     font-family: Lato, sans-serif;
     scroll-behavior: smooth;
   }
 
   body {
    color: #0E0E2C;
   }
 
   *, *:before, *:after {
     box-sizing: inherit;
   }
 `;
