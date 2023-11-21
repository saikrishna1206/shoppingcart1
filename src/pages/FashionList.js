import BasePage from "../basepage/basepage";
import ItemCard from "../component/itemcard";

export default function FashionList({FashionData,acceptCount,setAcceptCount}) {
  return (
    <BasePage
      acceptCount={acceptCount}
      setAcceptCount={setAcceptCount}
    >
        {FashionData.map((fash,ind)=>(
            <ItemCard
                fashion ={fash}
                key={ind}
                acceptCount={acceptCount}
                setAcceptCount={setAcceptCount}
            />
        ))
        }
    </BasePage>
  )
}