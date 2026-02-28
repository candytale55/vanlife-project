import React from "react"
import { useParams, Link, NavLink, Outlet } from "react-router-dom"
import { useEffect, useState } from "react"

export default function HostVanDetail() {
    const { id } = useParams()
    console.log("Params (id):", id); // TODO: Remove once testing is done
    const [currentVan, setCurrentVan] = useState(null)
    console.log("currentVan: ", currentVan); //TODO: Remove once testing is done.

    // TODO: move into a css file
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }

    // TODO: Create a Custom Hook for al fetch

    useEffect(() => {

        async function fetchData() {
            try {

                const response = await fetch(`/api/host/vans/${id}`);
                const cleanedData = await response.json();
                console.log(cleanedData.vans);

            } catch (error) {
                console.log(error.message);
                // TODO: Replace once the custom Hook is created
            }    
        }
        
        fetchData();
     }, [id]);
    /*  /* useEffect(() => {
        fetch(`/api/host/vans/${id}`)
            .then(res => res.json())
            .then(data => setCurrentVan(data.vans)) 
    }, []) */

    /* if (!currentVan) {
        return <h1>Loading...</h1>
    } */
    return (
        <section>
            <h2>I am HostVanDetail</h2>
            {/* <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>

            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>

                <nav className="host-van-detail-nav">
                    <NavLink
                        to="."
                        end
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Details
                    </NavLink>
                    <NavLink
                        to="pricing"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Pricing
                    </NavLink>
                    <NavLink
                        to="photos"
                        style={({ isActive }) => isActive ? activeStyles : null}
                    >
                        Photos
                    </NavLink>
                </nav>
                <Outlet context={{ currentVan, typeFilter }} />
            </div> */}
        </section>
    )
}
