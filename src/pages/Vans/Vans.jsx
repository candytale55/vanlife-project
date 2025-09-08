import React from "react"
import { Link } from "react-router-dom"

// ===== VANS LISTING COMPONENT =====
export default function Vans() {
    // ===== STATE MANAGEMENT =====
    const [vans, setVans] = React.useState([])

    // Fetch vans data on component mount
    React.useEffect(() => {
        fetch("/api/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    // ===== RENDER VAN TILES =====
    const vanElements = vans.map(van => (
        <div key={van.id} className="van-tile">
            <Link to={`/vans/${van.id}`}>
                {/* Van image */}
                <img src={van.imageUrl} />

                {/* Van basic info */}
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>

                {/* Van type badge */}
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))

    // ===== RENDER COMPONENT =====
    return (
        <div className="van-list-container">
            {/* Page header */}
            <h1>Explore our van options</h1>

            {/* Van grid */}
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}