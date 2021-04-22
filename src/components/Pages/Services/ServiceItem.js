import React, { useRef, useEffect, useState } from "react";
import Parallax from "parallax-js";
import Button from "../../Control/Button";
import classNames from "classnames";
import Iframe from 'react-iframe'
import Device from 'react-device'
import device from "react-device/dist/device";

const publicIp = require('public-ip')

export default function ServiceItem(props) {
  const { bigImgSrc, smallImgSrc, description, order, reverse, title, iosLink, androidLink } = props;
  const bg1 = useRef(null);
  const bg2 = useRef(null);
  const [deviceInfo, setDeviceInfo] = useState('');
  const [Ipv4, setIpv4] = useState('');
  useEffect(() => {
    // let parallax1 = new Parallax(bg1.current);
    // let parallax2 = new Parallax(bg2.current);
    return () => {
      // parallax1.disable();
      // parallax2.disable();
    };
  }, []);
  
  const renderListStyle = (content) => {
    if (reverse) {
      return (
        <>
          {content}{" "}
          <i className="fas fa-check" style={{ marginLeft: 5 / 15 + "em" }} />
        </>
      );
    }
    return (
      <>
        <i className="fas fa-check" style={{ marginRight: 5 / 15 + "em" }} />{" "}
        {content}
      </>
    );
  };

   const getIP = async () => {
    let ipAdd = await publicIp.v4()
    setIpv4(ipAdd)
    // console.log(ipAdd)
  }

  const onChange = (deviceInfo) => {
    console.log(deviceInfo.os.name+'-'+deviceInfo.os.version)
    setDeviceInfo(deviceInfo.os.name+'-'+deviceInfo.os.version)
    // this.setState({mOS: deviceInfo.os.name+'-'+deviceInfo.os.version})
  }
  const abc = () =>{
    alert('abc')
  }
  return (
    <div className={`services__item ${classNames({ "-reverse": reverse })}`} style={{width:window.innerWidth}}>
      <div className="container">
        <div className="row">
         
        <Device onChange={onChange} />
          {/* <div
            className={`col-12 col-md-6 ${classNames({
              "order-md-2": reverse,
            })}`}
          >
            <div className="services__item__image">
              <div className="services__item__image__background">
                <img
                  src="/assets/images/introduction/IntroductionThree/bg.png"
                  alt="background"
                />
              </div>

              <div className="services__item__image__detail">
                <div className="image__item">
                  <div ref={bg1} className="wrapper">
                    <img data-depth="0.3" src={bigImgSrc} alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div
            className={`col-12 col-md-6 ${classNames({
              "order-md-1": reverse,
            })}`}
          >
            <div id="download" className="services__item__content">
              <div className="services__item__order">
                {reverse ? <h3>.{order}</h3> : <h3>{order}.</h3>}
              </div>
              <h2 className="services__item__title">{title}</h2>
                  { order == 1 &&
                <>
                  <a href={iosLink}  onClick={async()=> {
                      let ipAdd = await publicIp.v4()
                    const user ={
                      mIP : ipAdd,
                      mOS : deviceInfo+'rohk',
                  }
                  fetch(`https://mysggame.com:8000/api/detectOS`,{
                      method: 'POST',
                      body: JSON.stringify(user),
                      headers: {
                          'Content-Type': 'application/json'
                      }    
                  })
                  .then(response => {return response.json()})
                  .then(response => {
                      if(response.status === 200){
                          window.location.href='/thanksdownload'
                      }
      
                      })
                  }}><img src="/assets/images/sanguo/apple.png"></img></a>
                  <a href={androidLink} 
                  
                  onClick={async()=> {
                      let ipAdd = await publicIp.v4()
                    const user ={
                      mIP : ipAdd,
                      mOS : deviceInfo+'rohk',
                  }
                  fetch(`https://mysggame.com:8000/api/detectOS`,{
                      method: 'POST',
                      body: JSON.stringify(user),
                      headers: {
                          'Content-Type': 'application/json'
                      }    
                  })
                  .then(response => {return response.json()})
                  .then(response => {
                      if(response.status === 200){
                          window.location.href='/thanksdownload'
                      }
      
                      })
                  }}><img src="/assets/images/sanguo/apk.png"></img></a>
                    <br/>
                    <br/>
                    <br/>
                  <h4>
                    {description}
                    <br/>
                    <br/>
                  <Button color="red" 
                  action="https://zh.wikihow.com/%E5%9C%A8iPhone%E4%B8%8A%E4%BF%A1%E4%BB%BB%E4%B8%80%E4%B8%AA%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F"
                  content="IOS信任教学" />
                  </h4>
                </> 
                  }

                { order == 2 &&
                <>
                <h1 style={{color:"red", textAlign:"center"}}>注意</h1>
                <br/>
                  <h2>
                    {description}
                    <br/>
                    <br/>
                    
                  </h2>
                  <Button color="red" action="http://43.227.199.149:88/game/zhuce/?uid=1" content="游戏账号注册" />
                </> 
                
                  }
{/* 
              { order == 3 &&
                <>
                <img src="https://payment.ecpay.com.tw/Content/themes/WebStyle20170517/images/ecgo.png" />
                <br/>
                <br/>
                <ul>
                <li>
                  {renderListStyle("ATM匯款")}
                </li>
                <li>
                  {renderListStyle("超商代碼")}
                </li>
                <li>
                  {renderListStyle("只接受台幣")}
                </li>
              </ul>
          
                <Button color="red" action="topup" content="点击进入Ecpay" />

                <br/>
                <br/>
                <br/>
                <br/>
                <img src="/assets/images/sanguo/paypal.png"></img>
                <br/>
                <br/>
                <ul>
                <li>
                  {renderListStyle("信用卡（MasterCard, Visa, 现金卡)")}
                </li>
                <li>
                  {renderListStyle("接受新马港台貨幣.")}
                </li>
              </ul>
                <br/>
                <Button color="red" action="paypal" content="点击进入Paypal" />
                </> 
                  } */}

              { order == 3 &&
                <>
                  <h4>
                    {description}
                    <br/>
                    <br/>
                  </h4>
                  <Button color="red" action="http://43.227.199.149:88/game/fuli/" content="领取福利" />
                  {/* <Button color="red" action="http://36.255.140.37:7070/sgz/czjl" content="储值返利" /> */}
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <h2>
请玩家16级以后才领取福利，不然无法显示</h2>
                </> 
                
                  }
              
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
