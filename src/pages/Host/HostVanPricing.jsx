
import { useOutletContext } from "react-router-dom"

export default function HostVanPricing() {

    const { currentVan } = useOutletContext();
    
    return (
        <section>
            <h3>I am HostVanPricing.jsx</h3>
            <h3 className="host-van-price">${currentVan.price}<span>/day</span></h3>
        </section>
        
    )
}