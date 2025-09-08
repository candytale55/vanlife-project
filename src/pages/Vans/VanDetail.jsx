// ===== IMPORTS =====
import React from "react"
import { useParams } from "react-router-dom"

// ===== VAN DETAIL COMPONENT =====
export default function VanDetail() {
    // ===== ROUTE PARAMS & STATE =====
    const params = useParams()
    const [van, setVan] = React.useState(null)

    // Fetch individual van data based on ID from URL
    React.useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))
    }, [params.id])

    // ===== RENDER COMPONENT =====
    return (
        <div className="van-detail-container">
            {van ? (
                <div className="van-detail">
                    {/* Van image */}
                    <img src={van.imageUrl} />

                    {/* Van type badge */}
                    <i className={`van-type ${van.type} selected`}>
                        {van.type}
                    </i>

                    {/* Van details */}
                    <h2>{van.name}</h2>
                    <p className="van-price"><span>${van.price}</span>/day</p>
                    <p>{van.description}</p>

                    {/* Rent CTA */}
                    <button className="link-button">Rent this van</button>
                </div>
            ) : <h2>Loading...</h2>}
        </div>
    )
}