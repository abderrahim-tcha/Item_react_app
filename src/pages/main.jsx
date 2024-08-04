import { useState } from "react";
import Header from "../component/header/header";
import Footer from "../component/footer/footer";
import ShowItems from "../component/showItems/showItems";
import MorePanel from "../component/header/morePanel";

function App() {
  const [isMorePanelVisible, setIsMorePanelVisible] = useState(false);

  return (
    <div>
      {isMorePanelVisible ? (
        <MorePanel setIsMorePanelVisible={setIsMorePanelVisible} />
      ) : null}
      <Header setIsMorePanelVisible={setIsMorePanelVisible} />
      <ShowItems />
      <Footer />
    </div>
  );
}

export default App;
