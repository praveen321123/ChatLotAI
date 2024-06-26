import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import "./main.css"
import { Context } from '../../context/Context'

const MainCom = () => {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)
  return (
    <div className='main'>
      <div className="nav">
        <p>ChatLotAI</p>
        <img src={assets.user_icon} alt="user-icon" />
      </div>
      <div className="main-container">

        {!showResult ?
        <>
          <div className="greet">
            <p><span>Hello, There!</span></p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest beautiful places to see an upcoming road trip</p>
              <img src={assets.compass_icon} alt="compass-icon" />
            </div>
            <div className="card">
              <p>Brief summarize this concept: urban planning</p>
              <img src={assets.bulb_icon} alt="bulb_icon" />
            </div>
            <div className="card">
              <p>Brainstorm team bonding activities for our retreat</p>
              <img src={assets.message_icon} alt="message_icon" />
            </div>
            <div className="card">
              <p>Improve the readability of the following code</p>
              <img src={assets.code_icon} alt="code_icon" />
            </div>
          </div>
        </> : 
        <div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="user-icon" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.chatLot_icon} alt="icon" />
            {loading ? 
            <div className='loader'>
              <hr />
              <hr />
              <hr />
            </div> :<p dangerouslySetInnerHTML={{__html:resultData}}></p>}

          </div>
        </div>
        }

        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'/>
            <div>
              <img src={assets.gallery_icon} alt="gallery_icon" />
              <img src={assets.mic_icon} alt="mic_icon" />
              {input ?<img onClick={() => onSent()} src={assets.send_icon} alt="send_icon" /> : null}
            </div>
          </div>
          <p className='bottom-info'>
          ChatLot may display inaccurate info, including about people, so double-checks its responses. Your privacy and ChatLot Apps.
        </p>
        </div>
      </div>
    </div>
  )
}

export default MainCom