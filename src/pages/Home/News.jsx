import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Import the default CSS styles
import { Link } from "react-router-dom";
import NewsDetails from "../../components/NewsDetails";
import { useEffect, useState } from "react";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  const commiunity = news.filter((data) => data.category === "commiunity");
  const featured = news.filter((data) => data.category === "featured");
  const newses = news.filter((data) => data.category === "newses");
  const academy = news.filter((data) => data.category === "academy");
  const blockchain = news.filter((data) => data.category === "blockchain");
  const payments = news.filter((data) => data.category === "payments");
  const developers = news.filter((data) => data.category === "developers");
  return (
    <section className="mt-20 mb-20">
      <Tabs>
        <TabList className="lg:flex grid grid-cols-3 justify-between text-center">
          <Tab className="custom-tab">all</Tab>
          <Tab className="custom-tab">commiunity</Tab>
          <Tab className="custom-tab">featured</Tab>
          <Tab className="custom-tab">news</Tab>
          <Tab className="custom-tab">Academy</Tab>
          <Tab className="custom-tab">Blockchain</Tab>
          <Tab className="custom-tab">Web3 Payments</Tab>
          <Tab className="custom-tab">Developers</Tab>
        </TabList>

        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {news.map((item) => (
              <NewsDetails item={item}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {commiunity.map((item) => (
              <NewsDetails item={item}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {featured.map((item) => (
              <NewsDetails item={item}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {newses.map((item) => (
              <NewsDetails item={item}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {academy.map((item) => (
              <NewsDetails item={item}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {blockchain.map((item) => (
              <NewsDetails item={item}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {payments.map((item) => (
              <NewsDetails item={item}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {developers.map((item, index) => (
              <NewsDetails item={item}/>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default News;
