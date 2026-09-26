import { readFileSync, writeFileSync } from "node:fs";
const path = "client/src/pages/Home.tsx";
let source = readFileSync(path, "utf8");
const marker = '  const searchResults = useMemo(() => { if (!state) return []; const q = query.trim().toLowerCase(); if (!q) return []; const all = [...state.goals.map((x) => ({ type: "Goal", id: x.id, title: x.title, text: x.description })), ...state.projects.map((x) => ({ type: "Project", id: x.id, title: x.name, text: x.description })), ...state.tasks.map((x) => ({ type: "Task", id: x.id, title: x.title, text: x.description || "" })), ...state.journal.map((x) => ({ type: "Journal", id: x.id, title: x.title, text: x.body }))]; return all.filter((x) => `${x.title} ${x.text}`.toLowerCase().includes(q)).slice(0, 12); }, [query, state]);\n';
if (!source.includes(marker)) throw new Error("memo not found");
source = source.replace(marker, "");
const insertBefore = '  if (!state) return <div className="boot-screen"><Loader size={30} /><p>Resolving your local workspace…</p></div>;\n';
source = source.replace(insertBefore, marker + insertBefore);
writeFileSync(path, source);
