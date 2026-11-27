import Image from "next/image";
import CommonButton from "@/components/ui/common/CommonButton";
import FlexWrapper from "@/components/ui/common/FlexWrapper";
import sadMonitor from "/public/sadMonitor.svg";

function NotFound() {
  return (
    <FlexWrapper className="flex-col items-center mt-[25dvh] gap-3">
      <Image src={sadMonitor} alt="sadMonitor" />
      <h2 className="text-3xl">Hmm...</h2>
      <p>
        This doesn’t seem to be the page you were looking for. Let’s get you
        back on track.
      </p>
      <CommonButton>GO BACK</CommonButton>
    </FlexWrapper>
  );
}

export default NotFound;
