/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "theme-ui";
import Link from "next/link";
import { GetServerSideProps } from "next";
import { useState, useEffect } from "react";
import { API_INDEX_URL } from "../../constants";
import { NoteType } from "../../types";

type Props = {
  notes: NoteType[];
};

const Notes = ({ notes = [] }: Props): JSX.Element => {
  const [arrNotes, setArrNotes] = useState<NoteType[]>([]);

  useEffect(() => {
    fetch(`${API_INDEX_URL}/notes`)
      .then((res) => res.json())
      .then(({ data }) => setArrNotes(data))
      .catch((e) => console.log(e.message));
  }, []);

  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>My Notes</h1>

      <h2>client side fetch</h2>
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {arrNotes.length > 0 &&
          arrNotes.map((note) => (
            <div sx={{ width: "33%", p: 2 }} key={note._id}>
              <Link href="/notes/[id]" as={`/notes/${note._id}`}>
                <a sx={{ textDecoration: "none", cursor: "pointer" }}>
                  <div sx={{ variant: "containers.card" }}>
                    <strong>{note.title}</strong>
                  </div>
                </a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Notes;
