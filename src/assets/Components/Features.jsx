import CreateOrder from "./feature-components/CreateOrder";
import Orders from "./feature-components/Orders";

export default function Features() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
            {/* Create Order Section */}
            <CreateOrder />

            {/* Order Summary and Reports Section */}
            <Orders />
        </div>
    )
}