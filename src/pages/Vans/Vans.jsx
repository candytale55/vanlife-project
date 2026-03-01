import { Link, useSearchParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Vans() {
        const [searchParams, setSearchParams] = useSearchParams()
        const typeFilter = searchParams.get("type")
        console.log("Typefilter", typeFilter) //TODO: Remove once testing is done
        const [vans, setVans] = useState([])

        useEffect(() => {
            fetch("/api/vans")
                .then(res => res.json())
                .then(data => setVans(data.vans))
        }, [])

        // Get vans that match the type filter
        const displayedVans = typeFilter
            ? vans.filter(van => van.type === typeFilter)
            : vans
        
    // ===== RENDER VAN TILES =====
    const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-tile">
            <Link
                to={van.id}
                state={{
                    search: `?${searchParams.toString()}`,
                    type: typeFilter
                }}
            >
                <img src={van.imageUrl} />
                <div className="van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}<span>/day</span></p>
                </div>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
            </Link>
        </div>
    ))
    
    
// ===== HANDLE FILTER BUTTONS =====
    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key)
            } else {
                prevParams.set(key, value)
            }
            return prevParams
        })
    }

    // ===== RENDER COMPONENT =====

    return (
        <div className="van-list-container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button
                    onClick={() => handleFilterChange("type", "simple")}
                    className={
                        `van-type simple 
                        ${typeFilter === "simple" ? "selected" : ""}`
                    }
                >Simple</button>
                <button
                    onClick={() => handleFilterChange("type", "luxury")}
                    className={
                        `van-type luxury 
                        ${typeFilter === "luxury" ? "selected" : ""}`
                    }
                >Luxury</button>
                <button
                    onClick={() => handleFilterChange("type", "rugged")}
                    className={
                        `van-type rugged 
                        ${typeFilter === "rugged" ? "selected" : ""}`
                    }
                >Rugged</button>

                {typeFilter ? (
                    <button
                        onClick={() => handleFilterChange("type", null)}
                        className="van-type clear-filters"
                    >Clear filter</button>
                ) : null}

            </div>
            <div className="van-list">
                {vanElements}
            </div>
        </div>
    )
}