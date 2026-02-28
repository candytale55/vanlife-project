// ===== IMPORTS =====
import React from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import { useEffect } from "react"

// ===== VAN DETAIL COMPONENT =====
export default function VanDetail() {
    // ===== ROUTE PARAMS & STATE =====
    const params = useParams()
/*     console.log("Params (van #): ", params); // TODO: Remove once testing is done. */
    /* const location = useLocation()
    const [van, setVan] = React.useState(null) */

    
    // Fetch individual van data based on ID from URL

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`/api/vans/${params.id}`);

                const cleanedData = await response.json();

                console.log(cleanedData); // TODO: Remove once testing is done.
                
            } catch (error) {
                console.log(error.message); // TODO: Remove once testing is done.
            }
        }
        fetchData();
    }, [params.id]);
    
    
    /* React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])
 */
    /* const search = location.state?.search || "";
    const type = location.state?.type || "all"; */

    return (
        <div className="van-detail-container">
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
            <h2>I am VanDetail</h2>
        </div>
    )
}