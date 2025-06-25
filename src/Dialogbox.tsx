// import React from 'react'
import { Dialog, Portal, Button } from "@chakra-ui/react";
// import { useEffect, useState } from "react";

function Dialogbox({ isOpen, setopen, list, setlist, id }) {

  //  const [test , settest] = useState(false);
  const dialogboxhandler = () => {
    const remove = list.filter((user) => user.id !== id);
    setlist([...remove]);
    setopen(!isOpen);
  };  
  return (
    <Dialog.Root
      unmountOnExit={true}
      closeOnEscape={true}
      motionPreset="slide-in-bottom"
      open={isOpen}
      onOpenChange={(e) => setopen(e.open)}
      placement={"center"}
    >
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Are you sure want to delete ?</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <p>your item will be deleted</p>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant="outline" onClick={() => setopen(false)}>Cancel</Button>
              </Dialog.ActionTrigger>
              <Button
                colorPalette={"red"}
                onClick={() => {
                  dialogboxhandler();
                }}
              >
                Delete
              </Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}

export default Dialogbox;
