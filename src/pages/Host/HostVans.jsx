import React from "react"
import { Link } from "react-router-dom"

export default function HostVans() {
    const [vans, setVans] = React.useState([])

    // TODO: Create a Custom Hook for fetching data
    React.useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])

    // TODO: Do something to manage the keys with a key package
    const hostVansEls = vans.map(van => (
        <Link
            to={van.id}
            key={van.id}
            className="host-van-link-wrapper"
        >
            <div className="host-van-single" key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className="host-van-info">
                    <h3>{van.name}</h3>
                    <p>${van.price}/day</p>
                </div>
            </div>
        </Link>
    ))

    return (
        <section>
            <h2>I am HostVans.jsx</h2>
            <h2 className="host-vans-title">Your listed vans</h2>
            <div className="host-vans-list">
                {
                    vans.length > 0 ? (
                        <section>
                            {hostVansEls}
                        </section>

                    ) : (
                        <h2>Loading...</h2>
                    )
                }
            </div>
        </section>
    )
}