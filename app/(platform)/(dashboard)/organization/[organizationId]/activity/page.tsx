import { Separator } from "@/components/ui/separator";
import { Info } from "../../../_components/info";
import { ActivityList } from "./_components/activity-list";
import { Suspense } from "react";
import { ActivityListSkeleton } from "./_components/activity-list-skeleton";

const ActivityPage = () => {
  return (
    <div className="w-full">
      <Info />
      <Separator className="my-2" />
      <Suspense fallback={<ActivityListSkeleton />}>
        <ActivityList />
      </Suspense>
    </div>
  );
};

export default ActivityPage;
