"use client";
import React, { useState } from "react";
import Header from "../component/header/header";
import MorePanel from "../component/header/morePanel";
import Footer from "../component/footer/footer";
import AddForm from "../component/addForm/addForm";
function Page() {
  const [isMorePanelVisible, setIsMorePanelVisible] = useState(false);

  return (
    <div>
      {isMorePanelVisible ? (
        <MorePanel setIsMorePanelVisible={setIsMorePanelVisible} />
      ) : null}
      <Header setIsMorePanelVisible={setIsMorePanelVisible} />
      <AddForm />
      <Footer />
    </div>
  );
}

export default Page;
