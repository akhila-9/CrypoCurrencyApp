import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  BodyContainer,
  Cards1,
  Currency,
  DetailsContainer,
  EntireContainer,
  HeaderContainer,
  Heading,
  Image,
  ImageContainer,
  ImageDiv,
  NamesContainer,
  Symbol,
} from "./App.styled";

function App() {
  const [data, setdata] = useState([]);
  const fetchAPI = async () => {
    const result = await fetch(
      "https://apis.ccbp.in/crypto-currency-converter"
    );
    const res = await result.json();
    console.log(res);
    setdata(res);
  };

  useEffect(() => {
    fetchAPI();
  }, []);
  return (
    <>
      <EntireContainer>
        <ImageContainer>
          <Heading>
            CryptoCurrency Tracker
          </Heading>
          <Image src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png" />
        </ImageContainer>
        {data.length > 0 && (
          <DetailsContainer>
            <HeaderContainer>
              <div>CoinType</div>
              {/* <Currency> */}
                <div>USD</div>
                <div>EURO</div>
              {/* </Currency> */}
            </HeaderContainer>
            <BodyContainer>
              <NamesContainer>
              <Cards1>
                {data.map((result) => {
                  return (
                    <>
                      <ImageDiv><Symbol src={result.currency_logo}/></ImageDiv>
                     
                    </>
                  );
                })}
              
              </Cards1>
               <Cards1>
                {data.map((result) => {
                  return (
                    <>
                    <div>{result.currency_name}</div>
                     
                    </>
                  );
                })}
              
              </Cards1>
              </NamesContainer>
               <Cards1>
                {data.map((result) => {
                  return (
                    <>
                    
                      <div>{result.usd_value}</div>
                    
                    </>
                  );
                })}
              
              </Cards1>
               <Cards1>
                {data.map((result) => {
                  return (
                    <>
                      
                      <div>{result.euro_value}</div>
                    </>
                  );
                })}
              
              </Cards1>
            </BodyContainer>
          </DetailsContainer>
        )}
      </EntireContainer>
    </>
  );
}

export default App;
