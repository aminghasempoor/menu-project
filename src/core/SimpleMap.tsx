"use client";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

const markerIcon = new L.Icon({
    iconUrl: "/marker-icon.png",
    shadowUrl: "/marker-shadow.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
});

export default function ContactMapSection() {
    const t = useTranslations("ContactUs")
    const lat = 32.3265;
    const lng = 50.8645;

    return (
        <div className="w-full p-4 rounded-xl shadow-md flex flex-col md:flex-row items-center mb-16 gap-6 md:gap-12">
            <div className="w-full md:w-1/2 text-right text-zinc-800 space-y-12">
                <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-orange-500 mt-1" />
                    <p className={"text-foreground"}>{t("address")}</p>
                </div>
                <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-orange-500" />
                    <p className={"text-foreground"}>{t("number")}</p>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-72 overflow-hidden rounded-lg">
                <MapContainer center={[lat, lng]} zoom={16} scrollWheelZoom={false} className="w-full h-full z-10">
                    <TileLayer
                        attribution="&copy; OpenStreetMap contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[lat, lng]} icon={markerIcon} />
                </MapContainer>
            </div>
        </div>
    );
}
