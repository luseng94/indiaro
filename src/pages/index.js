import React, { Component } from 'react';
import Head from "next/head";
import Link from "next/link";
import Select from "../components/Control/Select";
import { area } from "../common/variables";
import {reactLocalStorage} from 'reactjs-localstorage';


export default class Home extends Component {

  constructor(props) {
    
    super(props)
    this.state = {
        areacode: '0',
        phone: '',
        hidden: true,
        regexp : /^[0-9\b]+$/
    }
    this.myRef = React.createRef();
  }
  // componentDidMount(){
  //   window.location.href='home'
  // }

  handleChange = (e)=>{
    this.setState({areacode: e,
    phone: e})
    console.log(this.state.areacode)
}
onHandleTelephoneChange = e => {
  let phone = e.target.value;

  // if value is not blank, then test the regex
  if (phone === '' || this.state.regexp.test(phone)) {
      this.setState({ phone: phone })
  }
  if(e.target.length > 13){
      alert('請輸入對的手機號碼')
  }
};
onUserPhone = (e) =>{
  this.setState({phone: e.target.value})
  // console.log(this.state.phone)
}

submit=()=>{
  const preregister = {
      areacode: this.state.areacode,
      phone: this.state.phone,
      game: 'ROtw'
  }
  if (preregister.phone.length <= 6){
      alert('請輸入對的手機號碼')
  }else if(preregister.areacode === '0'){
      alert('請選擇地區')
  }else{
      fetch(`https://mysggame.com:8000/api/game/preregister`,{
          method: 'POST',
          body: JSON.stringify(preregister),
          headers: {
              'Content-Type': 'application/json'
          }    
      })
      .then(response => {return response.json()})
          .then(response => {
              if(response.status === 200){
                  alert("預約成功")

                  reactLocalStorage.set('areacode', this.state.areacode);
            window.location.href='thanks'

                  // this.props.props2.history.replace('/thanks', this.state.areacode)
              }else {
                  alert("預約失敗")
              }

          })
          .catch(err => {
              console.log(err)
              alert(err)
          });
  }
}
// handleScrollToElement=(event)=> {
//   document.getElementById("yuyue").scrollIntoView()

// }

render() {
  const renderListStyle = (content) => {

    return (
      <>
        <i className="fas fa-check" style={{ marginRight: 5 / 15 + "em" }} />{" "}
        {content}
      </>
    );
  };
  return (
    <>
      <Head>
        <title>RO：ORIGIN</title>
        {/* <script dangerouslySetInnerHTML={{__html: `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '299748131356859');
        fbq('track', 'PageView');`}} />

<noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=299748131356859&ev=PageView&noscript=1"
/>` }}
    /> */}
      </Head>
      <div onClick={this.handleScrollToElement}> 
        <img src="/assets/images/sanguo/rop1.jpg" alt="Logo" width={window.innerWidth}/>
      </div>
      <br/>
      {/* <div className="services__item__content" style={{textAlign: "center"}}> 
              <div className="services__item__order">
            
              </div>
              <h2 className="services__item__title">立即預約</h2>
              <ul>
                <li>
                  {renderListStyle("預約就送vip8，2.5萬元寶")}
                </li>
                <li>
                  {renderListStyle("7天登入送滿星紅色武將關羽")}
                </li>
                <li>
                  {renderListStyle(
                    "日常活躍獲得元寶官方10倍 ")}
                </li>
                <li>
                  {renderListStyle("周常活躍獲得銅錢官方10倍")}
                </li>
                <li>
                  {renderListStyle("開服基金所獲得元寶10倍")}
                </li>
              </ul>
      
            </div> */}

            {/* <div id="yuyue" className="col-12 col-md-6">
              <div className="contact-form">
                <form>
                
                <div className="shop-header">
                  <div className="shop-header__view">
                    <div className="shop-header__view__icon">
                    <h3 className="contact-title"></h3>
                      <Select options={area.SORT_TYPES} getValue={this.handleChange} />
                    </div>
                  </div>
                </div>
                  <div className="input-validator">
                  <input type='number' id="form_phone" type="tel" name="phone" value={this.state.phone} 
                             placeholder="手機號" required="required" data-error="需要填寫手機號碼"
                            onChange = {
                                this.onHandleTelephoneChange
                            } 
                            maxLength='15'/>
                            <div className="help-block with-errors" />
                  </div>
                </form>
                <div style={{textAlign: "center"}}>
                  <button className="btn -dark"  onClick={this.submit}><span>點擊預約</span></button>
                </div>
              </div>
            </div>
      */}
    </>
  );
   }
}
