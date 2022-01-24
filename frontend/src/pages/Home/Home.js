import React from "react";
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

  return (
    <div className="container">
      <h1 className="text-center" style={{ paddingTop: "30%" }}>
        HomePage
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
