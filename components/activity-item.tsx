import { AuditLog } from "@prisma/client";
import { generateLogMessage } from "@/lib/generate-log-message";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { format } from "date-fns";

interface ActivityProps {
  data: AuditLog;
}

export const ActivityItem = ({ data }: ActivityProps) => {
  return (
    <li className="flex items-center gap-x-2">
      <Avatar className="h-8 w-8">
        <AvatarImage src={data.userImage} />
      </Avatar>
      <div className="flex flex-col space-y-0.5">
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold lowercase text-neutral-700">
            {data.userName}
          </span>
          {generateLogMessage(data)}
        </p>
        <p>{format(new Date(data.createdAt), "d MMM, yyyy 'at' h:mm a")}</p>
      </div>
    </li>
  );
};
