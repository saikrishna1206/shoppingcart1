import { useState } from "react"

export default function ItemCard({fashion,acceptCount,setAcceptCount}){

    const [Show,setShow] = useState(true)

    function handleAccept(){
        setShow(! Show)
        setAcceptCount(acceptCount+1)
    }
    function handleReject(){
        setShow(! Show)
        setAcceptCount(acceptCount-1)
    }
    console.log(Show)
    
    return(
        <div className="card w-64 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img 
                src={fashion.img} alt="" 
                className="rounded-xl w-28 h-28" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{fashion.title}</h2>
                <p className="text-3xl"><sup>$</sup> {fashion.rate}</p>
                <div className="card-actions">
                    {Show ? <button className="btn btn-primary"
                        onClick={handleAccept}
                    >add to cart</button> : 
                    <button className="btn btn-danger"
                    onClick={handleReject}
                    >remove from cart</button>}
                </div>
                
             </div>
      </div>
    )
}