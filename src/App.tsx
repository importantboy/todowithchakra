import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import InputHandler from "./InputHandler";
import { useEffect, useState } from "react";

function App() {
  // const [todo , setTodo] = useState({});
  // const [todoList, setTodoList] = useState([]);
  const [todoList, setTodoList] = useState(() => {
    const stored = localStorage.getItem("todoList");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <Box
      as="div"
      display={"flow-root"}
      fontSize={{ base: "sm", md: "lg", lg: "xl" }}
    >
      <Navbar />
      <InputHandler exportList={{ todoList, setTodoList }} />
    </Box>
  );
}

export default App;
