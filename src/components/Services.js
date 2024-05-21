import MyHelmet from "./Helmet";
function Services(){
    const ServiceTitle = "Services"
    return(
        <>
        <Hero title={ServiceTitle}/>
        <MyHelmet
          title="Services"
          description="Welcome to my site! Explore our products and more."
          canonicalUrl="http://mysite.com/example"
       />
        <h1>Hello Services</h1>
        </>
    )
}

export default Services;