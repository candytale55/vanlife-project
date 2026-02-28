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
                setCurrentVan(cleanedData.vans[0])

            } catch (error) {
                console.log(error.message);
                // TODO: Replace once the custom Hook is created
            }    
        }
        
        fetchData();
     }, [id]);



    return (
        <section>
            <h2>I am HostVanDetail</h2>
            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            
            {currentVan ? (
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

                    {/* // TODO: Pass this to its own Navigation component ? */}
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
                    <Outlet context={{ currentVan }} />
            </div> ) :
                (
                    <h3>Loading...</h3>
                )
            }

        </section>
    )
}
