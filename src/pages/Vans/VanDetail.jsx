import { Link, useParams, } from "react-router-dom"
import { useEffect, useState } from "react"


export default function VanDetail() {

    const params = useParams()
    const [van, setVan] = useState(null);
    console.log("Van#: ", van); // TODO: Remove once tests are done. 
    
    // Fetch individual van data based on ID from URL
    //TODO: Implement a useFetch custom Hook for this
    useEffect(() => {
        async function fetchData() {

            try {
                const response = await fetch(`/api/vans/${params.id}`);

                const cleanedData = await response.json();

                setVan(cleanedData.van);
                
            } catch (error) {
                console.log(error.message); // TODO: Remove once testing is done.
            } 
        }
        fetchData();
    }, [params.id]);
    

    /* const search = location.state?.search || "";
    const type = location.state?.type || "all"; */

    return (
        <div className="van-detail-container">
            <h2>I am VanDetail</h2>
            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>{van.type}</i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
            
            {/* <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to { type }</span></Link>

            {van ? (
                <div className="van-detail">
                    <img src={van.imageUrl} />
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>} */}
            
        </div>
    )
}