import styled from "styled-components";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 24px 24px;
  position: relative;
  border-radius: 4px;

  > h4 {
    font-size: 18px;
    line-height: 28px;
    font-weight: 700;
    color: #333333;
    margin: inherit;
  }

  > div {
    > img {
      width: 136px;
      height: 120px;
      margin-top: 16px;
      border-radius: 4px;
    }

    > div {
      background-color: #333333;
      color: #ffffff;
      width: 136px;
      height: 24px;
      padding: 4px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      z-index: 3;
      bottom: 24px;
      border-radius: 0 0 4px 4px;

      > p {
        font-size: 12px;
        line-height: 16px;
        font-weight: 700;
      }
    }
  }
`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const FoodMenu = ({ menu }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Wrapper>
        <Typography variant="h4" gutterBottom>
          Menu
        </Typography>
        <Box>
          {menu &&
            menu.map((image) => {
              return (
                <div key={Math.random()}>
                  <Image
                    src={image.image}
                    height={50}
                    width={50}
                    alt="Image"
                    onClick={handleOpen}
                  />

                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Image
                        src={image.image}
                        height={550}
                        width={500}
                        alt="Image"
                        onClick={handleOpen}
                      />
                    </Box>
                  </Modal>
                </div>
              );
            })}
        </Box>
      </Wrapper>
    </>
  );
};

export default FoodMenu;
