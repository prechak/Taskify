import React from "react";

function IdPage({ params }: { params: { id: string } }) {
  return <div>Id: {params.id}</div>;
}

export default IdPage;
