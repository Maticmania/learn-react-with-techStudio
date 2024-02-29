import "../css/Home.css";
import img1 from "../assets/images/beautifulmonkey.jpg";
import Spin from "../components/Loader";
import ProductCard from "../components/ProductCARDWORK";


function Home() {
  return (
    <>
      
      {/* <NavBar /> */}
      <Spin />
      {/* <Hero heading='Welcome to Home page'/> */}
      <h1 className="bg-danger text-light">Welcome to Home Page</h1>
      <div
        className=""
        style={{
          backgroundColor: "green",
          height: "100%",
          borderRadius: "15px",
        }}
      >
        {/* <ProductCard /> */}
        <img src={img1} alt="" />
      </div>
    </>
  );
}

export default Home;
