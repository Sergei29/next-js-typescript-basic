/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { API_INDEX_URL } from "../../constants";

type Props = {
  note: Record<string, any>;
};

const Note = ({
  note = { title: "mock title", id: "mock ID" },
}: Props): JSX.Element => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>{note.title} </h1>
      <h2>{note.id}</h2>
    </div>
  );
};

export default Note;
