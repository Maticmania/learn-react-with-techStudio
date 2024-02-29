import "../css/About.css";
import Hero from "../components/Hero";
import image2 from "../assets/images/monkey-monkey.jpg"
function About() {
  // JSX
  const myJsx = <h3>This is awesome JSX</h3>;

  // myFavFood
  const food = ["amala", "fufu", "jollof", "spaghetti"];
  const myStyle = { listStyle: "none", color: "tomato" };
  return (
    <>
      <Hero image={image2} />
      <div>
        <h1>Matic's React App 0.1</h1>
        {myJsx}
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis soluta
        dicta, doloremque officia nisi dolorum sed placeat nihil aliquid optio.
      </p>

      {/* map through food array */}
      <h3>My favourite food</h3>
      {food.map((f, index) => {
        return (
          <div className="" key={index} style={myStyle}>
            <p className="">My favourite food is {f}</p>
          </div>
        );
      })}
    </>
  );
}

export default About;
