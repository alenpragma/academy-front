import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const News = () => {
    const [tabIndex, setTabIndex] = useState(0);
  return (
    <section className="mt-20">
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList style={{border: "0", display: "flex", justifyContent: "center", alignItems: "center" , gap: "20px"}}>
          <Tab style={{border: "0", backgroundColor: "#B8ABB7"}}>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </section>
  );
};

export default News;
