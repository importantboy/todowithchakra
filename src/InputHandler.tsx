import {
  Box,
  Heading,
  Input,
  Field,
  Stack,
  InputGroup,
  Button,
  For,
} from "@chakra-ui/react";
import { MdOutlineEditNote } from "react-icons/md";
import Todoitem from "./Todoitem";
import { useState } from "react";

const InputHandler = ({ exportList }) => {
  const { todoList, setTodoList } = exportList;
  const [inputvalue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const submitHandler = () => {
    if (!inputvalue.trim()) {
      alert("required some text");
      return;
    }
    const todo = {
      id: Date.now(),
      title: inputvalue,
      isCompleted: false,
      createdAt: new Date().toLocaleTimeString(),
    };
    setTodoList([...todoList, todo]);
    setInputValue('')
  };

  return (
    <Stack
      as="div"
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      minW={"md"}
    >
      <Heading
        as={"h2"}
        textTransform={"uppercase"}
        fontSize={{ base: "2rem", md: "4rem" }}
        textAlign={"center"}
        py={"2rem"}
      >
        todo list
      </Heading>

      <Box as={"div"} px={{ base: "1rem", md: "0rem" }}>
        <Field.Root display={"flex"} flexDir={"row"}>
          <InputGroup startElement={<MdOutlineEditNote />}>
            <Input
              type="text"
              placeholder="enter your todo"
              value={inputvalue}
              onChange={handleInput}
            />
          </InputGroup>
          <Button onClick={submitHandler}>Add item</Button>
        </Field.Root>

        {/* // here the todo list item will come  */}
        <Box as={"div"} display={"flex"} flexDir={"column"} minW={{sm : 'sm' , md : 'md' , lg : 'md'}}>
          {/* all todo list item will go here  */}
          {
            <For each={todoList}>
              {(item, index) => (
                <Todoitem
                  key={index}
                  item={item}
                  list={todoList}
                  setlist={setTodoList}
                />
              )}
            </For>
          }
        </Box>
      </Box>
    </Stack>
  );
};

export default InputHandler;
