import React from "react";

import ImageSlider from "../../components/Slider/ImageSlider"

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
    <ImageSlider />
  );
};
export default Home;
