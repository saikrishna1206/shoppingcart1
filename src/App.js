import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BasicExample from "./component/topnav";
import TopNav from "./component/topnav";
import BasePage from "./basepage/basepage";
import { useState } from "react";
import FashionList from "./pages/FashionList";
import NavScrollExample from "./component/topnav";

function App() {

  const [acceptCount,setAcceptCount] = useState(0)
  const FashionData = [
    {
      img:"https://w7.pngwing.com/pngs/826/253/png-transparent-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-cloth-thumbnail.png",
      tiltle:"T-shirt",
      rate:"1"
    },
    {
      img:"https://w7.pngwing.com/pngs/826/253/png-transparent-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-cloth-thumbnail.png",
      tiltle:"T-shirt",
      rate:"2"
    },
    {
      img:"https://w7.pngwing.com/pngs/826/253/png-transparent-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-cloth-thumbnail.png",
      tiltle:"T-shirt",
      rate:"3"
    },
    {
      img:"https://w7.pngwing.com/pngs/826/253/png-transparent-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-cloth-thumbnail.png",
      tiltle:"T-shirt",
      rate:"4"
    },
    {
      img:"https://w7.pngwing.com/pngs/826/253/png-transparent-t-shirt-polo-shirt-clothing-sleeve-black-t-shirt-black-crew-neck-t-shirt-tshirt-fashion-cloth-thumbnail.png",
      tiltle:"T-shirt",
      rate:"5"
    }
  ]

  const [Data,setData] = useState(FashionData)

  return (
    <div className="App">
      <FashionList
        FashionData={Data}
        setData={setData}
        acceptCount={acceptCount}
        setAcceptCount={setAcceptCount}
      />
    </div>
  );
}

export default App;