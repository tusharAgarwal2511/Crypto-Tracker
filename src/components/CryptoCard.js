import React, {useState} from 'react'
import './CryptoCard.css'

function CryptoCard(props)
{
  const[isActive, setIsActive] = useState(false)

  function FlipCard()
  {
    setIsActive(current => !current);
  }

  function SearchOnBinance()
  {
    window.open(`https://www.binance.com/en/trade/${props.Symbol}_USDT?theme=dark&type=spot`);
    setIsActive(current => !current)
  }

  function SearchOnGoogle()
  {
    window.open(`http://google.com/search?q=${props.Name}`);
    setIsActive(current => !current)
  }
  
  const PercentChange1h =   parseFloat(props.Percent_Change_1h)
  const PercentChange24h =  parseFloat(props.Percent_Change_24h)
  const PercentChange7d =   parseFloat(props.Percent_Change_7d)
  
  return (
    <div className='card-div'>
      <div className={isActive === true ?  'card flip-card' :  'card'} id="card" onClick={FlipCard}>
        <div className='front-side'>
          
          <h2> {props.Name} </h2> 

          <p>Symbol:   {props.Symbol}</p>

          <p>Price in UDS:   {props.Price_USD}</p> 

          <p>Market Cap in USD:   {props.Market_Cap_USD}</p> 

          <div className='button-div'>
            <button onClick={SearchOnGoogle}>View on Google</button>
            <button onClick={SearchOnBinance}>View on Binance</button> 
          </div>

          <p className='click-message' style={{ color: PercentChange1h <= 0 ? "#ff0000" : "#00ff26" }} >Click to read more</p> 

        </div>
        <div className='back-side'>
        
          <h2 >{props.Name} - {props.Symbol}</h2> 

          <p>Percent change 1h:   <span style={{ color: PercentChange1h <= 0 ? "#ff0000" : "#00ff26" }}>{props.Percent_Change_1h}% <span>{PercentChange1h <= 0 ? "⇓" : "⇑"}</span> </span></p> 

          <p>Percent change 24h:   <span style={{ color: PercentChange24h <= 0 ? "#ff0000" : "#00ff26" }}>{props.Percent_Change_24h}% <span>{PercentChange24h <= 0 ? "⇓" : "⇑"}</span> </span></p> 

          <p>Percent change 7d:   <span style={{ color: PercentChange7d <= 0 ? "#ff0000" : "#00ff26" }}>{props.Percent_Change_7d}% <span>{PercentChange7d <= 0 ? "⇓" : "⇑"  }</span> </span></p> 
          
          <p>Volume24a:   {props.Volume24A}</p> 

          <p>CSupply:   {props.CSupply}</p> 
        </div>
      </div>
      
    </div>
  )
}

export default CryptoCard 

//↓↑