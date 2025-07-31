"use client";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { useUser } from "@/lib/utils/useUser";
import markerIconPng from "/public/marker.svg";
import markerShadowPng from "/public/marker-shadow.png";

const markerIcon = new L.Icon({
    iconUrl: markerIconPng.src,
    shadowUrl: markerShadowPng.src,
    iconSize: [50, 82], // ← بزرگ‌تر از [25, 41]
    iconAnchor: [25, 82], // ← تنظیم درست محل قرارگیری
    popupAnchor: [0, -82], // ← مکان قرارگیری پاپ‌آپ روی مارکر
    shadowSize: [41, 41], // ← سایز سایه (اختیاری)
});

export default function ContactMapSection() {
    const t = useTranslations("ContactUs");
    const user = useUser((state) => state.user);
    const lat = user?.lat;
    const lng = user?.lng;

    return (
        <div className="w-full p-4 rounded-xl shadow-md flex flex-col md:flex-row items-center mb-16 gap-6 md:gap-12">
            <div className="w-full md:w-1/2 text-right text-zinc-800 space-y-12">
                <div className="flex items-center gap-2">
                    <MapPin className="w-11 h-11 text-orange-500 mt-1" />
                    <p className={"flex text-foreground text-md md:text-lg gap-x-2 line-clamp-1"}>
                        {t("address")} {user?.address}
                    </p>
                </div>
                <div className="flex items-center gap-2">
                    <Phone className="w-6 h-6 text-orange-500" />
                    <p className={"text-foreground text-md md:text-lg"}>
                        {t("number")} {user?.telephone}
                    </p>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-72 overflow-hidden rounded-lg">
                <MapContainer
                    center={[Number(lat), Number(lng)]}
                    zoom={16}
                    scrollWheelZoom={true}
                    className="w-full h-full z-10"
                >
                    <TileLayer
                        attribution="&copy; OpenStreetMap contributors"
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[Number(lat), Number(lng)]} icon={markerIcon} />
                </MapContainer>
            </div>
        </div>
    );
}
