import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
const Home = () => {
  // const [homepageData, setHomepageData] = useState({});

  // const fetchHomepageData = async () => {
  //   try {
  //     const response = await fetch("/home", {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //     });
  //     const data = await response.json();
  //     setHomepageData(data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchHomepageData();
  // }, []);

  // console.log(homepageData);

  function animation() {
    var tabsNewAnim = $("#navbarPageContent");
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $("#page-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px",
    });
  }

  const resetSelector = () => {
    $("#navbarPageContent ul li").removeClass("active");
    $("#shop").addClass("active");
    setTimeout(function () {
      animation();
    }, 200);
  };

  return (
    <div className="container">
      <h1 className="text-center" style={{ paddingTop: "30%" }}>
        HomePage{" "}
        <Link to="/shop" onClick={resetSelector}>
          Click to shop
        </Link>
      </h1>
      <p className="text-left">
        Home Home Home Home Home Home Home Home Home Home Home Home Home Home
        Home Home Home Home Home Home Home Home Home Home Home Home Home Home
        Home Home Home Home Home Home Home Home Home Home Home Home Home Home
      </p>
      <h1 className="text-center" style={{ paddingTop: "30%" }}>
        Home
      </h1>
      <h1 className="text-center" style={{ paddingTop: "30%" }}>
        Home
      </h1>
      <h1 className="text-center" style={{ paddingTop: "30%" }}>
        Home
      </h1>
      <h1 className="text-center" style={{ paddingTop: "30%" }}>
        Home
      </h1>
      <h1 className="text-center" style={{ paddingTop: "30%" }}>
        Home
      </h1>
      <h1 className="text-center" style={{ paddingTop: "30%" }}>
        Home
      </h1>
    </div>
  );
};
export default Home;
