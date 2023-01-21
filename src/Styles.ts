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

  .currentLocation{
    margin: 10px 0 10px 65px; 
    padding: 2px 5px;
  }
  
`;

export const Section = styled.section`
    display: flex;
    margin: auto 0px;

    .WorldMap{
      margin: 10px 70px;
      overflow-x:hidden;
      height: 85vh;
    }

    form{
      margin: -10px 0 15px 0;
    }

    input , button{
      padding:5px;
      border:solid lightgray 1px;
      border-radius: 5px;

    }

    button{
      cursor: pointer;
    }
`;

