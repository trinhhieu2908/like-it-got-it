import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pageSelectorActions } from "../../store/pageSelector";
const Home = () => {
  const dispatch = useDispatch();
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

  const resetSelector = () => {
    dispatch(pageSelectorActions.changePage("shop-page"));
  };

  return (
    <div className="container">
      <h1 className="text-center" style={{ paddingTop: "30%" }}>
        HomePage{" "}
        <Link to="/shop/detail/p2" onClick={resetSelector}>
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
    </div>
  );
};
export default Home;
