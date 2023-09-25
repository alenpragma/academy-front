import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Import the default CSS styles
import { Link } from "react-router-dom";
import NewsDetails from "../../components/NewsDetails";
import { useEffect, useState } from "react";
import axios from "axios";

const News = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function getBlogs() {
      await axios
        .get("https://academy-backend-95ag.onrender.com/api/v1/blog/getBlog")
        .then((res) => {
          // console.log("====================================");
          setNews(res.data.blogs);
          // console.log("====================================");
        });
    }
    getBlogs();
  }, []);
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
            {!news
              ? "Loading..."
              : news.map((item) => <NewsDetails item={item}  key={item._id}/>)}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {!news
              ? "Loading..."
              : news.map(
                  (item) =>
                    item.category === "Community" && <NewsDetails item={item}  key={item._id}/>
                )}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {!news
              ? "Loading..."
              : news.map(
                  (item) =>
                    item.category === "Featured" && <NewsDetails item={item}  key={item._id}/>
                )}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {!news
              ? "Loading..."
              : news.map(
                  (item) =>
                    item.category === "News" && <NewsDetails item={item}  key={item._id}/>
                )}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
          {!news
              ? "Loading..."
              : news.map(
                  (item) =>
                    item.category === "Academy" && <NewsDetails item={item}  key={item._id}/>
                )}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
          {!news
              ? "Loading..."
              : news.map(
                  (item) =>
                    item.category === "Blockchain" && <NewsDetails item={item}  key={item._id}/>
                )}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
          {!news
              ? "Loading..."
              : news.map(
                  (item) =>
                    item.category === "Web3 Payments" && <NewsDetails item={item}  key={item._id}/>
                )}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
          {!news
              ? "Loading..."
              : news.map(
                  (item) =>
                    item.category === "Developers" && <NewsDetails item={item} key={item._id} />
                )}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default News;
