import AppTodo from "@/components/todos/AppTodo";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen py-20 flex justify-center flex-col items-center">
    <span className="text-4xl font-extrabold uppercase">
      Todo App
    </span>
    <h1 className="uppercase text-4xl font-extrabold">
      <span className="lowercase">
        my humble
      </span> todo app
    </h1>
    <div className="flex justify-center flex-col items-center" >
      <AppTodo/>
    </div>
    </main>
  );
}
