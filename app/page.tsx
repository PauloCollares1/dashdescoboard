import { auth } from "@clerk/nextjs";
import ModalTasks from "./components/Core/ModalTasks";

export default function Home() {
  return (
    <main>
      <ModalTasks />
    </main>
  );
}
