import { db } from "@/lib/db";
import React from "react";
import { Board } from "./board";
import { Form } from "./form";

async function OrganizationIdPage() {
  const boards = await db.board.findMany();

  return (
    <div className="flex flex-col space-y-4">
      <Form />
      <div className="space-y-2">
        {boards.map((boards) => (
          <Board key={boards.id} title={boards.title} id={boards.id} />
        ))}
      </div>
    </div>
  );
}

export default OrganizationIdPage;
