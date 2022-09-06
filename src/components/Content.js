import Axios from 'axios'
import React, {useState, useEffect, useContext} from 'react'
import './Content.css'
import CryptoCard from './CryptoCard'
import { AppContext } from '../App'

const URL = 'https://api.coinlore.net/api/tickers/?start=0&limit=99'

function Content(props)
{
    const { Search } = useContext(AppContext)

    //add scroll to top button, add more themes, search feature, sort by and may be filters
    const [CryptoList, SetCryptoList] = useState([])
    
    useEffect(() => {
        Axios.get(URL).then((Response) => {
            SetCryptoList(Response.data["data"])
        });
    });

    // console.log(CryptoList[0].name)


  
    return (
        <div className='content'>
            
            {CryptoList.filter((Crypto) =>
            {
                if (Search === "")
                {
                    return Crypto
                }
                else if (Crypto.name.toLowerCase().includes(Search.toLowerCase()) || Crypto.symbol.toLowerCase().includes(Search.toLowerCase()))
                {
                    return Crypto
                }
                

            }).map((Crypto)=>{
                return <CryptoCard
                    Name={Crypto.name} 
                    Symbol={Crypto.symbol}
                    Rank={Crypto.rank}
                    Price_USD={Crypto.price_usd}
                    Market_Cap_USD={Crypto.market_cap_usd}
                    Percent_Change_1h={Crypto.percent_change_1h}
                    Percent_Change_24h={Crypto.percent_change_24h}
                    Percent_Change_7d={Crypto.percent_change_7d}
                    Volume24A={Crypto.volume24a}
                    CSupply={Crypto.CSupply}//change needed to Crypto.Csupply

                    />
            })}
            
        </div>
    )
}

export default Content