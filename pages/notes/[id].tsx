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

const Note = ({ note }: Props): JSX.Element => {
  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>{note.title} </h1>
      <h2>{note._id}</h2>
    </div>
  );
};

export default Note;

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  params,
}) => {
  const response = await fetch(`${API_INDEX_URL}/notes/${params!.id}`);

  // if no response - redirect to /notes page
  if (!response.ok) {
    res.writeHead(302, { Location: "/notes" });
    res.end();
    return { props: {} };
  }

  const { data } = await response.json();

  return {
    props: {
      note: data,
    },
  };
};
