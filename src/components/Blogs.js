import MyHelmet from "./Helmet";
import Hero from "./Hero";
function Blogs (){
    const BlogTitle = "Blogs"
    return(
    <>
       <Hero title={BlogTitle}/> 
       <MyHelmet
          title="Blogs"
          description="Welcome to my site! Explore our products and more."
          canonicalUrl="http://mysite.com/example"
       />
        {/* <h1>Hello Blogs</h1> */}
    </>
    )
}

export default Blogs;

