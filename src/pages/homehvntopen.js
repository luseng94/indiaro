import LayoutFour from "../components/Layout/LayoutFour";
import { Breadcrumb, BreadcrumbItem } from "../components/Other/Breadcrumb";
import CTAOne from "../components/Sections/CallToAction/CTAOne";
import ServiceItem from "../components/Pages/Services/ServiceItem";
import { formatSingleNumber } from "../common/utils";
import servicesData from "../data/pages/services.json";

export default function services() {
  const handleScrollToElement=(event)=> {
    document.getElementById("download").scrollIntoView()
  
  }
  return (
    <LayoutFour title="仙境传说：爱如初见">
      {/* <Breadcrumb title="三国2017手游">
      </Breadcrumb> */}
      <div onClick={handleScrollToElement}>
      <img src='/assets/images/sanguo/roh1.jpg' width={window.innerWidth}/>
      </div>
      <br/>
      <br/>
      {servicesData &&
        servicesData.map((item, index) => (
          <ServiceItem
            key={index}
            bigImgSrc={process.env.PUBLIC_URL + item.bigImgSrc}
            smallImgSrc={process.env.PUBLIC_URL + item.smallImgSrc}
            title={item.title}
            description={item.description}
            iosLink={item.iosLink}
            androidLink={item.androidLink}
            order={formatSingleNumber(index + 1)}
            reverse={index % 2 === 1}
          />
        ))}

      {/* <CTAOne /> */}
    </LayoutFour>
  );
}
