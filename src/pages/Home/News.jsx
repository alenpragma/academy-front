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
      category: "commiunity",
    },
    {
      img: "https://i.ibb.co/Zm6cdnP/news.png",
      title: "Unlocking Efficiency: How Blockchain Transforms Business Payments",
      details:
        "Blockchain technology, which first emerged on the scene in 2009 with the inception of Bitcoin, initially had an aura of uncertainty reminiscent of the early days of PC hacking. It employed a decentralized, peer-to-peer architecture that was seen as too risky for practical business applications. However, the blockchain landscape has significantly transformed since then, particularly in enterprise adoption.",
      date: "September 12, 2023",
      category: "featured",
    },
    {
      img: "https://i.ibb.co/Zm6cdnP/news.png",
      title: "How to Use Fuse Token Bridge",
      details:
        "Blockchain technology, which first emerged on the scene in 2009 with the inception of Bitcoin, initially had an aura of uncertainty reminiscent of the early days of PC hacking. It employed a decentralized, peer-to-peer architecture that was seen as too risky for practical business applications. However, the blockchain landscape has significantly transformed since then, particularly in enterprise adoption.",
      date: "September 12, 2023",
      category: "newses",
    },
    {
      img: "https://i.ibb.co/Zm6cdnP/news.png",
      title: "Empowering SMEs with Embedded Finance",
      details:
        "Blockchain technology, which first emerged on the scene in 2009 with the inception of Bitcoin, initially had an aura of uncertainty reminiscent of the early days of PC hacking. It employed a decentralized, peer-to-peer architecture that was seen as too risky for practical business applications. However, the blockchain landscape has significantly transformed since then, particularly in enterprise adoption.",
      date: "September 12, 2023",
      category: "academy",
    },
    {
      img: "https://i.ibb.co/Zm6cdnP/news.png",
      title: "How to Get FUSE on Ethereum Using Uniswap",
      details:
        "Blockchain technology, which first emerged on the scene in 2009 with the inception of Bitcoin, initially had an aura of uncertainty reminiscent of the early days of PC hacking. It employed a decentralized, peer-to-peer architecture that was seen as too risky for practical business applications. However, the blockchain landscape has significantly transformed since then, particularly in enterprise adoption.",
      date: "September 12, 2023",
      category: "blockchain",
    },
    {
      img: "https://i.ibb.co/Zm6cdnP/news.png",
      title: "The Benefits of FUSE On-Chain Crypto Staking: Unlocking the Future of Digital Assets",
      details:
        "Blockchain technology, which first emerged on the scene in 2009 with the inception of Bitcoin, initially had an aura of uncertainty reminiscent of the early days of PC hacking. It employed a decentralized, peer-to-peer architecture that was seen as too risky for practical business applications. However, the blockchain landscape has significantly transformed since then, particularly in enterprise adoption.",
      date: "September 12, 2023",
      category: "payments",
    },
    {
      img: "https://i.ibb.co/Zm6cdnP/news.png",
      title: "What is ERC6900: Enriching Account Abstraction Capabilities",
      details:
        "Blockchain technology, which first emerged on the scene in 2009 with the inception of Bitcoin, initially had an aura of uncertainty reminiscent of the early days of PC hacking. It employed a decentralized, peer-to-peer architecture that was seen as too risky for practical business applications. However, the blockchain landscape has significantly transformed since then, particularly in enterprise adoption.",
      date: "September 12, 2023",
      category: "developers",
    },
  ];

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
        <TabList className="lg:flex justify-between text-center">
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
              <NewsDetails item={item} key={index} />
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {commiunity.map((item, index) => (
              <div className="space-y-5  shadow-md p-5" key={index}>
                <img className="rounded" src={item.img} alt="" />
                <h2 className="font-bold text-[18px]">{item.title}</h2>
                <p className="text-slate-500">{item.details.slice(0, 100)}</p>
                <p className="text-slate-500 text-[12px]">{item.date}</p>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {featured.map((item, index) => (
              <div className="space-y-5  shadow-md p-5" key={index}>
                <img className="rounded" src={item.img} alt="" />
                <h2 className="font-bold text-[18px]">{item.title}</h2>
                <p className="text-slate-500">{item.details.slice(0, 100)}</p>
                <p className="text-slate-500 text-[12px]">{item.date}</p>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {newses.map((item, index) => (
              <div className="space-y-5  shadow-md p-5" key={index}>
                <img className="rounded" src={item.img} alt="" />
                <h2 className="font-bold text-[18px]">{item.title}</h2>
                <p className="text-slate-500">{item.details.slice(0, 100)}</p>
                <p className="text-slate-500 text-[12px]">{item.date}</p>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {academy.map((item, index) => (
              <div className="space-y-5  shadow-md p-5" key={index}>
                <img className="rounded" src={item.img} alt="" />
                <h2 className="font-bold text-[18px]">{item.title}</h2>
                <p className="text-slate-500">{item.details.slice(0, 100)}</p>
                <p className="text-slate-500 text-[12px]">{item.date}</p>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {blockchain.map((item, index) => (
              <div className="space-y-5  shadow-md p-5" key={index}>
                <img className="rounded" src={item.img} alt="" />
                <h2 className="font-bold text-[18px]">{item.title}</h2>
                <p className="text-slate-500">{item.details.slice(0, 100)}</p>
                <p className="text-slate-500 text-[12px]">{item.date}</p>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {payments.map((item, index) => (
              <div className="space-y-5  shadow-md p-5" key={index}>
                <img className="rounded" src={item.img} alt="" />
                <h2 className="font-bold text-[18px]">{item.title}</h2>
                <p className="text-slate-500">{item.details.slice(0, 100)}</p>
                <p className="text-slate-500 text-[12px]">{item.date}</p>
              </div>
            ))}
          </div>
        </TabPanel>
        <TabPanel className="custom-tab-panel mt-10">
          <div className="lg:grid grid-cols-3 gap-5">
            {developers.map((item, index) => (
              <div className="space-y-5  shadow-md p-5" key={index}>
                <img className="rounded" src={item.img} alt="" />
                <h2 className="font-bold text-[18px]">{item.title}</h2>
                <p className="text-slate-500">{item.details.slice(0, 100)}</p>
                <p className="text-slate-500 text-[12px]">{item.date}</p>
              </div>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default News;
