
import Todo from "@/components/todos/Todo";
import {prisma} from "../utils/prisma"
import AddTodo from "@/components/todos/AddTodo";

async function getData() {
  const data = await prisma.todo.findMany({
    select:{
      title: true,
      id:true,
      isCompleted:true,
    },
    orderBy:{
      createAt:"asc",
    }
  }
);
return data; 
}
export default async function Home() {
  const data = await getData();
  return (
    <main className="w-screen py-20 flex justify-center flex-col items-center">
    <span className="text-4xl font-extrabold uppercase">
      Todo App
    </span>
    <h1 className="uppercase text-4xl font-extrabold mb-3">
      <span className="lowercase">
       write down your
      </span> Todo
    </h1>
    <div className="flex justify-center flex-col items-center" >
      <AddTodo/>
      <div className="flex flex-col gap-5 items-center mt-10 justify-center w-screen">
      {
        data.map((todo,id)=>(<div className="w-full" key={id}><Todo todo={todo}/></div>))
      }
      </div>
    </div>
    </main>
  );
}
