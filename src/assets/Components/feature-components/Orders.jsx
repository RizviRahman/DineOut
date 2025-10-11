import Reports from "./order-components/Reports";
import Summary from "./order-components/Summamy";

export default function Orders() { 
    return (
        <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
            {/* Order Summary */}
            <Summary />

            {/* Order Reports */}
            <Reports />
        </div>
    )
 }