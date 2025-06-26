import {
  Box,
  Collapsible,
  Checkbox,
  HStack,
  Group,
  Badge,
  Text,
  Editable,
  Code,
} from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { RiEditFill } from "react-icons/ri";
import { handleCheckboxClick } from "./Todofunction";
import Dialogbox from "./Dialogbox";
import { useState } from "react";
// import { useState } from "react";

function Todoitem({ item, list, setlist }) {
  const [open, setopen] = useState(false);

  const handleSetCheck = (id) => {
    const updatedList = list.map((user) =>
      user.id === id ? { ...user, isCompleted: !item.isCompleted } : user
    );
    setlist([...updatedList]);
  };

  const deleteHandler = () => {
    setopen(!open);
  };

  const [collapse, setcollapse] = useState(false);

  return (
    <Box >
      <Dialogbox
        isOpen={open}
        setopen={setopen}
        list={list}
        setlist={setlist}
        id={item.id}
      
      />
      <Collapsible.Root
        maxW={'md'}
        unmountOnExit 
        bg={"whiteAlpha.100"}
        px={"4"}
        my={2}
        //  maxW={'md'}
        rounded={"md"}
        fontSize={"1rem"}
         open={collapse}
         onOpenChange={(e) => setcollapse(e.open)}
        lazyMount={true}
        className="isthereanybutton"
         
      >
        <Collapsible.Trigger paddingY="3" asChild>
          <HStack
            justifyContent={"space-between"}
            display={"flex"}
            textAlign={"left"}
            className="rahulisgreat"
             w={'100%'}
            
          >
            <Box
              as={"div"}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"space-between"}
              gap={"1.2rem"}
            >
              <Text textDecoration={item.isCompleted ? "line-through" : ""}>
                {item.title &&
                  item.title.trim().split(" ").slice(0, 8).join(" ") + "..."}
              </Text>

              <Box
                as={"div"}
                display={"flex"}
                textTransform={"capitalize"}
                gap="2"
              >
                <Badge colorPalette={"purple"}>
                  {[item.createdAt].toString().toUpperCase()}
                </Badge>
                {item.isCompleted ? (
                  <Badge colorPalette={"green"}>{"completed"}</Badge>
                ) : (
                  <Badge colorPalette={"yellow"}>{"in progress"}</Badge>
                )}
              </Box>
            </Box>

            <Group>
              <Checkbox.Root
                variant={"solid"}
                colorPalette={"green"}
                size={"md"}
                cursor={"pointer"}
                // checked={isCompleted}
                onClick={handleCheckboxClick}
                onChange={() => {
                  handleSetCheck(item.id);
                }}
              >
                <Checkbox.HiddenInput />
                <Checkbox.Control />
              </Checkbox.Root>

              <Text
                as={"span"}
                fontSize={"1.5rem"}
                color={"red.500"}
                cursor={"pointer"}
                onClick={(e) => {
                  handleCheckboxClick(e);
                  deleteHandler();
                }}
              >
                <MdDelete />
              </Text>

              <Text
                as={"span"}
                fontSize={"1.5rem"}
                color={"blue.500"}
                cursor={"pointer"}
                onClick={(e) => {
                  handleCheckboxClick(e);
                  setcollapse(!collapse);
                }}
              >
                <RiEditFill />
              </Text>
            </Group>
          </HStack>
        </Collapsible.Trigger>
        <Collapsible.Content>
          <Code>double click to edit :</Code>
          <Box padding="4" my={"5"} borderWidth="1px" >
            {/* text inside the box will go inside it    */}
            <Editable.Root
               minW={'full'}
              defaultValue={item.title}
              onValueChange={(val) => {
                const updatedlist = list.map((user) => {
                  return user.id === item.id
                    ? { ...user, title: val.value }
                    : user;
                });
                setlist(updatedlist);
              }}
              textDecoration={item.isCompleted ? "line-through" : ""}
            >
              <Editable.Preview />
              <Editable.Textarea />
            </Editable.Root>
          </Box>
        </Collapsible.Content>
      </Collapsible.Root>
    </Box>
  );
}

export default Todoitem;
