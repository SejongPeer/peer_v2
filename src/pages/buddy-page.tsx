import { useSearchParams } from "react-router-dom";
import { BuddyStart } from "../components/buddy/buddyStart";
import { useEffect } from "react";

export const BuddyPage = () => {
    const [searchParams] = useSearchParams();
    const step = searchParams.get("step") || "0";

    useEffect(() => {
        // 페이지가 로드될 때 body 배경색 변경
        document.body.style.backgroundColor = "#FAF5F5";

        // 컴포넌트가 언마운트될 때 배경색 원래대로 복구
        return () => {
            document.body.style.backgroundColor = "";
        };
    }, []);

    const buddyStep = () => {
        switch (step) {
            case "0":
                return <BuddyStart />;
        }
    }

    return(
        <div>
            {buddyStep()}
        </div>
    )
};