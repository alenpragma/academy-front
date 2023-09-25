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
          <Tab className="custom-tab">All</Tab>
          <Tab className="custom-tab">Commiunity</Tab>
          <Tab className="custom-tab">Featured</Tab>
          <Tab className="custom-tab">News</Tab>
          <Tab className="custom-tab">Academy</Tab>
          <Tab className="custom-tab">Blockchain</Tab>
          <Tab className="custom-tab">Web3 Payments</Tab>
          <Tab className="custom-tab">Developers</Tab>
        </TabList>

        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {!news
              ? "Loading..."
              : news.map(
                  (item) =>
                    item.status !== "pending" && (
                      <NewsDetails item={item} key={item._id} />
                    )
                )}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {!news
              ? "Loading..."
              : news.map((item) =>
                  item.category === "Community" && item.status !== "pending" ? (
                    <NewsDetails item={item} key={item._id} />
                  ) : null
                )}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {!news
              ? "Loading..."
              : news.map((item) =>
                  item.category === "Featured" && item.status !== "pending" ? (
                    <NewsDetails item={item} key={item._id} />
                  ) : null
                )}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {!news
              ? "Loading..."
              : news.map((item) =>
                  item.category === "Academy" && item.status !== "pending" ? (
                    <NewsDetails item={item} key={item._id} />
                  ) : null
                )}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {!news
              ? "Loading..."
              : news.map((item) =>
                  item.category === "News" && item.status !== "pending" ? (
                    <NewsDetails item={item} key={item._id} />
                  ) : null
                )}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {!news
              ? "Loading..."
              : news.map((item) =>
                  item.category === "Blockchain" &&
                  item.status !== "pending" ? (
                    <NewsDetails item={item} key={item._id} />
                  ) : null
                )}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {!news
              ? "Loading..."
              : news.map((item) =>
                  item.category === "Web3 Payments" &&
                  item.status !== "pending" ? (
                    <NewsDetails item={item} key={item._id} />
                  ) : null
                )}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {!news
              ? "Loading..."
              : news.map((item) =>
                  item.category === "Developers" &&
                  item.status !== "pending" ? (
                    <NewsDetails item={item} key={item._id} />
                  ) : null
                )}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default News;
