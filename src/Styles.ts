/* #root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: left;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
} */

// import styled from "styled-components";



// export const Section = styled.section`
//     display: flex;

// `

import styled from "styled-components";

export  const Wrapper = styled.div`
 display:flex;
 flex-direction: column;
 padding-top: 10px;

  .currentLocation, label{
    margin: 10px 0 10px 65px; 
    padding: 5px 5px; 
    color: #3b4241;
  }
  
  .currentLocation > :first-child{
    color: red;
  }

  label, span {
    color: #2f4f4f;
    font-weight: bold;
  }
`;

export const Section = styled.section`
    display: flex;
    margin: auto 0px;

    .WorldMap{
      margin: 10px 70px;
      overflow:hidden;
      height: 85vh;
      /* background-color: #AAD3DF; */ //enabled this if transformation is enabled
    }
    
    .leaflet-container{
      background-color: inherit;
      
    }

    .leaflet-pane {
      transform: none !important; //stops transform: translate3d(211px, 127px, 0px) (by defaut it is enabled)
    }

    input , button{
      padding:5px;
      border:solid lightgray 1px;
      border-radius: 5px;
      color: #3b4241;
    }

    button{
      cursor: pointer;
    }
`;

