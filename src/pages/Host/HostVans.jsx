import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getHostVans } from "../../api.js"

export default function HostVans() {
    const [vans, setVans] = useState([])
    const [loading, setLoading] = useState(false);

    // TODO: Create a Custom Hook for fetching data
    /* useEffect(() => {
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    }, [])
 */

    useEffect(() => {
        async function loadVans() {
            setLoading(true);
            const data = await getHostVans();
            setVans(data);
            setLoading(false);
        }
        loadVans();
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

    if (loading) {
        return <h2>Loading...</h2>
    }

    return (
        <section>
            <h2 className="host-vans-title">Your listed vans</h2>
            <div className="host-vans-list">
                <section>
                    {hostVansEls}
                </section>
                {/* //TODO: Fix the semantic tags WTF! */}
            </div>
        </section>
    )
}