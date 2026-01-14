"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

export default function NearbyFriends() {
    const [friends, setFriends] = useState<any[]>([]);

    useEffect(() => {
        apiFetch("/location/nearby?radius=5")
            .then(setFriends)
            .catch(console.error);
    }, []);

    return (
        <div className="mt-4">
            <h2 className="text-lg mb-2">Nearby Friends</h2>

            {friends.length === 0 && <p>No nearby friends</p>}

            {friends.map((f) => (
                <div
                    key={f.userId}
                    className="border p-2 mb-2 rounded"
                >
                    <p>User: {f.userId}</p>
                    <p>Distance: {f.distanceKm.toFixed(2)} km</p>
                </div>
            ))}
        </div>
    );
}
