import LayoutFour from "../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../components/Other/Breadcrumb";

export default function services() {

    
  const openline=()=>{
    window.open('https://line.me/ti/g2/5_b8TjyfajrqCKoojxcXBA?utm_source=invitation&utm_medium=link_copy&utm_campaign=default','_Self')
  }
  return (
    // <LayoutFour title="三国2017手游私服">
    //   <Breadcrumb title="三国2017手游">
    //   </Breadcrumb>
    //   <div style={{textAlign:"center"}}>
    //     <h1>感谢您的下载与支持，如有疑问可询问客服</h1>
    //     <br/>
    //     <h2>LINE: sgsf2020</h2>
    //     <br/>
    //     <h2>微信： sanguosf2020</h2>

    //   </div>
    // </LayoutFour>
    <div onClick={openline}> 
        <img src="/assets/images/sanguo/td.jpg" alt="Logo" width={window.innerWidth}/>
      </div>
  );
}
