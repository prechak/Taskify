import { z } from "zod";
import { Card } from "@prisma/client";
import { ActionState } from "@/lib/create-safa-action";
import { UpdateCard } from "./schema";

export type InputType = z.infer<typeof UpdateCard>;
export type ReturnType = ActionState<InputType, Card>;
