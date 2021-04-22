import React, { Component } from 'react';
import {reactLocalStorage} from 'reactjs-localstorage';
import Head from "next/head";
class thanks extends Component {
  constructor(props) {
    super(props)
    this.state = {
      areacode: reactLocalStorage.get('areacode'),
      fblink: '',
      linelink: 'https://bit.ly/39QS92C',
      wechat: ''
    }
  }
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  openline=()=>{
    window.open(this.state.linelink,'_Self')
  }
  render() {
    return(
    <>
    <Head>
    <title>仙境传说：爱如初见</title>
    <script dangerouslySetInnerHTML={{__html: `!function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '199171388335645');
    fbq('track', 'PageView');`}} />

<noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=199171388335645&ev=PageView&noscript=1"
/>` }}
/>
  </Head>
    <div>
      <div onClick={this.openline}> <img src="/assets/images/sanguo/thanks.jpg" alt="Logo" width={window.innerWidth}/></div>
    </div>
    </>
    )
  }
}

export default thanks;