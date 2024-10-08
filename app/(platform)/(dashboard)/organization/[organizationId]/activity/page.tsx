import { Separator } from "@/components/ui/separator";
import { Info } from "../../../_components/info";
import { ActivityList } from "./_components/activity-list";
import { Suspense } from "react";
import { ActivityListSkeleton } from "./_components/activity-list-skeleton";
import { checkSubscription } from "@/lib/subscription";

const ActivityPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="w-full">
      <Info isPro={isPro} />
      <Separator className="my-2" />
      <Suspense fallback={<ActivityListSkeleton />}>
        <ActivityList />
      </Suspense>
    </div>
  );
};

export default ActivityPage;
