import LocationButton from "@/components/LocationButton";
import NearbyFriends from "@/components/NearbyFriends";

export default function Dashboard() {
    return (
        <div className="p-6 max-w-xl mx-auto">
            <h1 className="text-xl mb-4">Dashboard</h1>

            <LocationButton />
            <NearbyFriends />
        </div>
    );
}
