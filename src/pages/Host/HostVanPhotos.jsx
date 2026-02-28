import React from "react"
import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos() {
    const { currentVan } = useOutletContext();
    return (
        <div>
            <h3>I am HostVanPhotos.jsx</h3>
            <img src={currentVan.imageUrl} className="host-van-detail-image" />
       
        </div>
    )
}