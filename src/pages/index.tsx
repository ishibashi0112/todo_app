import { Button, Stack, Textarea, Title } from "@mantine/core";
import type { NextPage } from "next";
import { useState } from "react";

const Home: NextPage = () => {
  const [value, setValue] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const handleClickAdd = (): void => {
    setTodos((prev) => [...prev, value]);
  };

  return (
    <div>
      <header className="h-10">
        <Title>my todo</Title>
      </header>
      <div className="p-3">
        <div>
          <Textarea
            placeholder="todo text"
            value={value}
            onChange={(event) => setValue(event.currentTarget.value)}
          />
          <Button onClick={handleClickAdd}>Add Todo</Button>
        </div>
        <Stack>
          {todos.map((todo: string, i: number) => (
            <ul className="m-0 p-0">
              <li
                className="list-none p-2 w-96 bg-slate-300 rounded shadow-md"
                key={i}
              >
                {todo}
              </li>
            </ul>
          ))}
        </Stack>
      </div>
    </div>
  );
};

export default Home;
