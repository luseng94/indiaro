import Head from "next/head";


export default function LayoutFour(props) {
  return (
    <>
      <Head>
        <title>{props.title || "Eliah | React"}</title>
      </Head>
      {/* <ScrollFixedHeader container={props.container} /> */}
      {props.children}
      {/* <FooterOne /> */}
    </>
  );
}
