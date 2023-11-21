import ItemCard from "../component/itemcard";
import NavScrollExample from "../component/topnav";

export default function BasePage({children,acceptCount,setAcceptCount}){
    return(
        <div className="flex flex-col bg-black w-full border-opacity-50">
            <div className="grid h-20 card mx-5 mt-4">
                <NavScrollExample
                    acceptCount={acceptCount}
                    setAcceptCount={setAcceptCount}
                />
            </div>
            <div className="divider"></div>
            <div className="grid card place-items-center bg-black text-white">
                <h1 className="my-5">MEGA SALE</h1>
                <p className="my-5">End of season</p>
            </div>
            <div className="divider"></div>
            <div className="flex flex-row flex-wrap gap-x-10 gap-y-10 sm:mx-10 md:mx-20 xl:mx-44">
               {children}
            </div>
        </div>
    )
}