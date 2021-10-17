/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import { useRouter } from "next/router";
import { GetServerSideProps } from "next";
import { API_INDEX_URL } from "../../constants";
import { NoteType } from "../../types";

type Props = {
  note: NoteType;
};

const Note = ({
  note = { title: "mock title", _id: "mock ID" },
}: Props): JSX.Element => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>{note.title} </h1>
      <h2>{note._id}</h2>
    </div>
  );
};

export default Note;
