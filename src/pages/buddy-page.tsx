import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

// 매칭 컴포넌트
import { BuddyStart } from "../components/buddy/buddyStart";
import { BuddyGender } from "../components/buddy/matching/buddyGender1";
import { BuddyMajor } from "../components/buddy/matching/buddyMajor2";
import { BuddyType } from "../components/buddy/matching/buddyType3";
import { BuddyGrade } from "../components/buddy/matching/buddyGrade4";
import { BuddyFinal } from "../components/buddy/matching/buddyFinal5";

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
            case "1":
                return <BuddyGender />;
            case "2":
                return <BuddyMajor />;
            case "3":
                return <BuddyType />;
            case "4":
                return <BuddyGrade />;
            case "5":
                return <BuddyFinal />;
        }
    }

    return(
        <div>
            {buddyStep()}
        </div>
    )
};