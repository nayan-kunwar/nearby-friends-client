"use client";

import { useEffect, useState } from "react";
import { apiFetch } from "@/lib/api";

type NearbyUser = {
    userId: string;
    name: string;
    distanceKm: number;
    relationship: "none" | "requested" | "pending" | "friends";
};

export default function NearbyFriends() {
    const [friends, setFriends] = useState<NearbyUser[]>([]);
    const [loadingId, setLoadingId] = useState<string | null>(null);

    useEffect(() => {
        apiFetch("/location/nearby?radius=5")
            .then(setFriends)
            .catch(console.error);
    }, []);

    const sendRequest = async (userId: string) => {
        try {
            setLoadingId(userId);
            await apiFetch(`/friends/request/${userId}`, {
                method: "POST",
            });

            setFriends((prev) =>
                prev.map((f) =>
                    f.userId === userId
                        ? { ...f, relationship: "requested" }
                        : f
                )
            );
        } finally {
            setLoadingId(null);
        }
    };

    const acceptRequest = async (userId: string) => {
        try {
            setLoadingId(userId);
            await apiFetch(`/friends/accept/${userId}`, {
                method: "POST",
            });

            setFriends((prev) =>
                prev.map((f) =>
                    f.userId === userId
                        ? { ...f, relationship: "friends" }
                        : f
                )
            );
        } finally {
            setLoadingId(null);
        }
    };

    return (
        <div className="mt-4">
            <h2 className="text-lg mb-2">Nearby Friends</h2>

            {friends.length === 0 && <p>No nearby friends</p>}

            {friends.map((f) => (
                <div
                    key={f.userId}
                    className="border p-3 mb-2 rounded flex justify-between items-center"
                >
                    <div>
                        <p className="font-medium">{f?.name || f.userId}</p>
                        <p className="text-sm text-gray-500">
                            {f.distanceKm.toFixed(2)} km away
                        </p>
                    </div>

                    {/* ACTIONS */}
                    {f.relationship === "none" && (
                        <button
                            disabled={loadingId === f.userId}
                            onClick={() => sendRequest(f.userId)}
                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Send Request
                        </button>
                    )}

                    {f.relationship === "requested" && (
                        <span className="text-yellow-600 text-sm">
                            Request Sent
                        </span>
                    )}

                    {f.relationship === "pending" && (
                        <button
                            disabled={loadingId === f.userId}
                            onClick={() => acceptRequest(f.userId)}
                            className="px-3 py-1 bg-green-500 text-white rounded"
                        >
                            Accept
                        </button>
                    )}

                    {f.relationship === "friends" && (
                        <span className="text-green-600 text-sm">
                            Friends ✔
                        </span>
                    )}
                </div>
            ))}
        </div>
    );
}
