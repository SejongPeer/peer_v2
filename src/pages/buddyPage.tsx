import { useSearchParams } from "react-router-dom";
import { BuddyStart } from "../components/buddy/buddyStart";

export const BuddyPage = () => {
    const [searchParams] = useSearchParams();
    const step = searchParams.get("step") || "1";

    const buddyStep = () => {
        switch (step) {
            case "1":
                return <BuddyStart />;
        }
    }

    return(
        <div>
            {buddyStep()}
        </div>
    )
};