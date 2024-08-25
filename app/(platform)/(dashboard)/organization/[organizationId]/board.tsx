import { deleteBoard } from "@/actions/delete-board";
import { Button } from "@/components/ui/button";
import { FormDelete } from "./form-delete";

interface BoardsProps {
  title: string;
  id: string;
}

export const Board = ({ title, id }: BoardsProps) => {
  const deleteBoardWithId = deleteBoard.bind(null, id);

  return (
    <form action={deleteBoardWithId} className="flex items-center gap-x-2">
      <p>Borad Title: {title}</p>
      <FormDelete />
    </form>
  );
};
