import react from "react";
import Province from "./Province";

function ProvinceGrid() {

    const provinces = [
        {
            Image: "src/assets/southern.png",
            title: "Southern Province",
            description: "Sun, Sand, and Serendipity"        
        },
        {
            Image: "src/assets/eastern.png",
            title: "Eastern Province",
            description: "Where the Island Breezes"
        },
        {
            Image: "src/assets/uva.png",
            title: "Uva Province",
            description: "Nature's Playgrounds"
        },
        {
            Image: "src/assets/western.png",
            title: "Western Province",
            description: "City Vibes, Coastal Charms"
        },
        {
            Image: "src/assets/northern.png",
            title: "Nothern Province",
            description: "Ancient Soul, Modern Vibe"
        },
        {
            Image: "src/assets/sabaragamuwa.png",
            title: "Sabaragamuwa Province",
            description: "Hidden Gems Awaitts"
        },
        {
            Image: "src/assets/central.png",
            title: "Central Province",
            description: "Hill Country Heartbeat"
        },
        {
            Image: "src/assets/northwest.png",
            title: "North Western Province",
            description: "History Untouched"
        },
        {
            Image: "src/assets/northcentral.png",
            title: "North Central Province",
            description: "Land of Legends"
        }
    ]

    return (
        <div className="province-grid">
            {provinces.map((item, index) => (
                <Province
                    key={index}
                    image={item.Image}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </div>
    )   
}
export default ProvinceGrid;