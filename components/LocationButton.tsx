"use client";

import { apiFetch } from "@/lib/api";

export default function LocationButton() {
    const updateLocation = () => {
        console.log("Update button clicked");

        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                console.log("Location received", pos.coords);

                await apiFetch("/location/update", {
                    method: "POST",
                    body: JSON.stringify({
                        latitude: pos.coords.latitude,
                        longitude: pos.coords.longitude,
                    }),
                });

                alert("Location updated");
            },
            (err) => {
                console.error("Geolocation error", err);
            }
        );
    };

    return (
        <button
            onClick={updateLocation}
            className="bg-green-600 text-white px-4 py-2 hover:bg-green-500 rounded"
        >
            Update My Location
        </button>
    );
}
