import { createGlobalStyle, styled } from "styled-components";

export const Title = styled.h2`
font-family: 'Digital', sans-serif;
font-size: 16px;
`

export const Card = styled.div`
  max-width: 430px;
  max-width: 601px;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  img{
    width: 430px;
  }
`;

export const NameDiv = styled.div`
  position: absolute;
  top: 595px;
  right: 190px;
  width: 270px;
  height: 30px;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: clip;
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  text-align: left;
  color: #ffffff;
`

export const LevelDiv = styled.div`
  position: absolute;
  top: 597px;
  right: 235px;
  width: 270px;
  height: 30px;
  white-space: nowrap; 
  overflow: hidden; 
  text-overflow: clip;
  text-align: left;
  font-size: 12;
  font-weight: 500;
  text-align: left;
  color: #ffffff;
`

export const BoostSetDiv = styled.div`
  position: absolute;
  top: 577px;
  right: 190px;
  width: auto;
  font-size: 11px;
  text-align: right;
  color: black;
  font-weight: 700;
`

export const FirstEffectBox = styled.div`
position: absolute;
width: 354px;
height: auto;
bottom: 45px;
right: 173px;
background: rgba(0, 238, 255, 0);
border-radius: 10px;
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(11.2px);
-webkit-backdrop-filter: blur(11.2px);
border: 1px solid rgba(0, 0, 0, 0.66);
padding-left: 5px;
padding-top: 0;
background-color: #000000af;
`
export const SecondEffectBox = styled.div`
position: absolute;
width: 354px;
height: auto;
top: 645px;
right: 173px;
background: rgba(0, 238, 255, 0);
border-radius: 10px;
backdrop-filter: blur(11.2px);
-webkit-backdrop-filter: blur(11.2px);
border: 1px solid rgba(0, 0, 0, 0.66);
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(11.2px);
-webkit-backdrop-filter: blur(11.2px);
padding-left: 5px;
padding-top: 0;
background-color: #000000af;
`

export const Effect = styled.p`
  margin: 5px;
  color: white;
  font-size: 12px;
  font-weight: lighter;
  text-align: left;
  color: #ffffff;
  text-shadow: 
               -2px -2px 1px #000000, 
               -2px 2px 1px #000000,                    
                2px -2px 1px #000000,                  
                2px 1px 1px #000000;
`

export const PlayCostBox = styled.div`
width: 45px;
height: 45px;
border-radius:50%;
position: absolute;
  top: 142px;
  right: 492px;
`

export const PlayCost = styled.p`
  margin: 5px;
  margin: 0;
  padding: 0;
  color: white;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  color: #ffffff;
  text-shadow: 
               -2px -2px 1px #000000, 
               -2px 2px 1px #000000,                    
                2px -2px 1px #000000,                  
                2px 1px 1px #000000;
`

export const DigivolveCost = styled.span`
  position: absolute;
  top: 232px;
  right: 500px;
margin: 5px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-align: left;
  color: #ffffff;
  text-shadow: 
               -2px -2px 1px #000000, 
               -2px 2px 1px #000000,                    
                2px -2px 1px #000000,                  
                2px 1px 1px #000000;
`

export const DigivolveCostLevel = styled.span`
  position: absolute;
  top: 228px;
  right: 500px;
  margin: 5px;
  color: white;
  font-size: 9px;
  font-weight: bold;
  text-align: left;
  color: #ffffff;
  text-shadow: 
               -2px -2px 1px #000000, 
               -2px 2px 1px #000000,                    
                2px -2px 1px #000000,                  
                2px 1px 1px #000000;
`

export const DP = styled.span`
position: absolute;
top: 108px;
right: 196px;
margin: 5px;
  color: #000000;
  font-size: 50px;
  font-weight: bold;
  text-align: left;
`

export const InfoBox = styled.div`
width: auto;
position: absolute;
  top: 616px;
  right: 175px;
  font-size: 9px;
  text-align: right;
`