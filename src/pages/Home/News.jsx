import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Import the default CSS styles
import { Link, useNavigate } from "react-router-dom";
import NewsDetails from "../../components/NewsDetails";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { blogdata } from "../../slices/blogDataSlice";

const News = () => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();
  let disp = useDispatch();
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
  useEffect(() => {
    async function getBlogs() {
      await axios
        .get(
          "https://academy-backend-95ag.onrender.com/api/v1/category/categories"
        )
        .then((res) => {
          // console.log("====================================");
          setCategory(res.data);
          // console.log("====================================");
        });
    }
    getBlogs();
  }, []);
  let sendBlogData = async (item) => {
    await disp(blogdata(item));
    navigate("/mainNews");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [more, setMore] = useState(false)
  const handleMore = () => {
    setMore(!more)
  }
  console.log(more)
  return (
    <section className="mt-20 mb-20">
      <Tabs>
        <TabList className="grid lg:grid-cols-8 grid-cols-3 justify-between text-center">
          <Tab className="custom-tab">All</Tab>
          {category.slice(0, 6).map((item) => (
            <Tab className="custom-tab" key={item._id}>
              {item.name}
            </Tab>
          ))}
          <button className="custom-tab" onClick={handleMore}>more+ ...</button>
          {more && category.slice(6, 10).map((item) => (
            <Tab className="custom-tab" key={item._id}>
              {item.name}
            </Tab>
          ))}
        </TabList>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {!news
              ? "Loading..."
              : news.map(
                  (item) =>
                    item.status !== "pending" && (
                      <NewsDetails
                        onClick={() => sendBlogData(item)}
                        item={item}
                        key={item._id}
                      />
                    )
                )}
          </div>
        </TabPanel>

        {category.map((category) =>
          !category ? (
            "Loading..."
          ) : (
            <TabPanel className="custom-tab-panel mt-10">
              <div className="lg:grid grid-cols-3 gap-5">
                {!news
                  ? "Loading..."
                  : news.map((item) =>
                      item.category === category.name &&
                      item.status !== "pending" ? (
                        <NewsDetails
                          onClick={() => sendBlogData(item)}
                          item={item}
                          key={item._id}
                        />
                      ) : null
                    )}
              </div>
            </TabPanel>
          )
        )}
      </Tabs>
    </section>
  );
};

export default News;
