import { useNavigate } from "react-router-dom";
import { logout } from "../../functions/connection/auth";
import { HeaderContainer, IconExit } from "./header.style";

import { Modal } from "antd";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <Modal
        title="Modal"
        open={open}
        onOk={() => logout(navigate)}
        onCancel={hideModal}
        okText="Sim"
        cancelText="Cancelar"
      >
        <p>Tem certeza que deseja sair?</p>
      </Modal>
      <HeaderContainer>
        <IconExit onClick={showModal} />
      </HeaderContainer>
    </>
  );
};

export default Header;
