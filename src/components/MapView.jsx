import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";

const farmerIcon = L.divIcon({
  className: "",
  html: `<div style="background:#2F4B3C;width:16px;height:16px;border-radius:50%;border:3px solid #fff;box-shadow:0 0 0 2px #2F4B3C;"></div>`,
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

const mandiIcon = L.divIcon({
  className: "",
  html: `<div style="background:#D9A94C;width:14px;height:14px;border-radius:50%;border:2px solid #2F4B3C;"></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});

function FlyToController({ target }) {
  const map = useMap();

  useEffect(() => {
    if (target) {
      map.flyTo([target.lat, target.lon], 11, { duration: 0.6 });
    }
  }, [target, map]);

  return null;
}

export default function MapView({ mandis, farmerLocation, selected }) {
  const { t } = useLanguage();

  return (
    <div className="panel">
      <div className="panel-head">
        <h2>{t("map.title")}</h2>

        <span className="count">
          {t("map.subtitle", { count: mandis.length })}
        </span>
      </div>

      <MapContainer
        center={[farmerLocation.lat, farmerLocation.lon]}
        zoom={9}
        scrollWheelZoom={false}
        style={{ height: "460px", width: "100%" }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker
          position={[farmerLocation.lat, farmerLocation.lon]}
          icon={farmerIcon}
        >
          <Popup>
            <b>{t("map.youAreHere")}</b>
            <br />
            {farmerLocation.name}
          </Popup>
        </Marker>

        {mandis.map((m) => (
          <Marker
            key={m.name}
            position={[m.lat, m.lon]}
            icon={mandiIcon}
          >
            <Popup>
              <b>{m.name}</b>
              <br />
              ₹{m.price.toLocaleString("en-IN")}
              {t("common.perQuintal")}
              <br />
              {t("common.arrivalPerDay", { qty: m.arrival })}
            </Popup>
          </Marker>
        ))}

        <FlyToController target={selected} />
      </MapContainer>
    </div>
  );
}