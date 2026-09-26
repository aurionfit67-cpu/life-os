import { readFileSync, writeFileSync } from "node:fs";
const path = "client/src/pages/Home.tsx";
let source = readFileSync(path, "utf8");
source = source.replace('onEdit={(id) => setModal({ kind: "goal", editId: id })}', 'onEdit={(id: string) => setModal({ kind: "goal", editId: id })}');
source = source.replace('onDelete={(id) => remove("goal", id)}', 'onDelete={(id: string) => remove("goal", id)}');
source = source.replace('onEdit={(id) => setModal({ kind: "habit", editId: id })}', 'onEdit={(id: string) => setModal({ kind: "habit", editId: id })}');
source = source.replace('onDelete={(id) => remove("habit", id)}', 'onDelete={(id: string) => remove("habit", id)}');
source = source.replace('onDelete={(id) => remove("event", id)}', 'onDelete={(id: string) => remove("event", id)}');
writeFileSync(path, source);
