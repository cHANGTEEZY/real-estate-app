import { mapData } from "../../../data/map";
import "./Map.css";

export default function MapCompo() {
  return (
    <div className="map-grid-container">
      <h1 className="map-grid-title">Search by Region</h1>
      <div className="map-grid">
        {mapData.map((item, index) => {
          return (
            <div key={index} className="map-grid-item">
              <div className="map-grid-image">
                <img src={item.image} alt={item.title} />
              </div>
              <h2 className="map-region-title">{item.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}
