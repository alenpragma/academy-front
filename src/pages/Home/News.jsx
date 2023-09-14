import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Import the default CSS styles
import NewsDetails from "../../components/NewsDetails";

const News = () => {
  const news = [
    {
      img: "https://i.ibb.co/Zm6cdnP/news.png",
      title: "The Ultimate Guide to Blockchain for Business",
      details:
        "Blockchain technology, which first emerged on the scene in 2009 with the inception of Bitcoin, initially had an aura of uncertainty reminiscent of the early days of PC hacking. It employed a decentralized, peer-to-peer architecture that was seen as too risky for practical business applications. However, the blockchain landscape has significantly transformed since then, particularly in enterprise adoption.",
      date: "September 12, 2023",
      category: "community",
    },
    {
      img: "https://i.ibb.co/Zm6cdnP/news.png",
      title: "The Ultimate Guide to Blockchain for Business",
      details:
        "Blockchain technology, which first emerged on the scene in 2009 with the inception of Bitcoin, initially had an aura of uncertainty reminiscent of the early days of PC hacking. It employed a decentralized, peer-to-peer architecture that was seen as too risky for practical business applications. However, the blockchain landscape has significantly transformed since then, particularly in enterprise adoption.",
      date: "September 12, 2023",
      category: "community",
    },
    {
      img: "https://i.ibb.co/Zm6cdnP/news.png",
      title: "The Ultimate Guide to Blockchain for Business",
      details:
        "Blockchain technology, which first emerged on the scene in 2009 with the inception of Bitcoin, initially had an aura of uncertainty reminiscent of the early days of PC hacking. It employed a decentralized, peer-to-peer architecture that was seen as too risky for practical business applications. However, the blockchain landscape has significantly transformed since then, particularly in enterprise adoption.",
      date: "September 12, 2023",
      category: "community",
    },
    {
      img: "https://i.ibb.co/Zm6cdnP/news.png",
      title: "The Ultimate Guide to Blockchain for Business",
      details:
        "Blockchain technology, which first emerged on the scene in 2009 with the inception of Bitcoin, initially had an aura of uncertainty reminiscent of the early days of PC hacking. It employed a decentralized, peer-to-peer architecture that was seen as too risky for practical business applications. However, the blockchain landscape has significantly transformed since then, particularly in enterprise adoption.",
      date: "September 12, 2023",
      category: "community",
    },
    {
      img: "https://i.ibb.co/Zm6cdnP/news.png",
      title: "The Ultimate Guide to Blockchain for Business",
      details:
        "Blockchain technology, which first emerged on the scene in 2009 with the inception of Bitcoin, initially had an aura of uncertainty reminiscent of the early days of PC hacking. It employed a decentralized, peer-to-peer architecture that was seen as too risky for practical business applications. However, the blockchain landscape has significantly transformed since then, particularly in enterprise adoption.",
      date: "September 12, 2023",
      category: "community",
    },
    {
      img: "https://i.ibb.co/Zm6cdnP/news.png",
      title: "The Ultimate Guide to Blockchain for Business",
      details:
        "Blockchain technology, which first emerged on the scene in 2009 with the inception of Bitcoin, initially had an aura of uncertainty reminiscent of the early days of PC hacking. It employed a decentralized, peer-to-peer architecture that was seen as too risky for practical business applications. However, the blockchain landscape has significantly transformed since then, particularly in enterprise adoption.",
      date: "September 12, 2023",
      category: "community",
    },
  ];
  return (
    <section className="mt-20 mb-20">
      <Tabs>
        <TabList className="lg:flex justify-center gap-5">
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
            {news.map((item, index) => (
             <NewsDetails item={item} key={index}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {news.map((item, index) => (
             <NewsDetails item={item} key={index}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {news.map((item, index) => (
             <NewsDetails item={item} key={index}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {news.map((item, index) => (
             <NewsDetails item={item} key={index}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {news.map((item, index) => (
             <NewsDetails item={item} key={index}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {news.map((item, index) => (
             <NewsDetails item={item} key={index}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {news.map((item, index) => (
             <NewsDetails item={item} key={index}/>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {news.map((item, index) => (
             <NewsDetails item={item} key={index}/>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default News;
