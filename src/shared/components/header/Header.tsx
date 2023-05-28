import { logout } from "../../functions/connection/auth";
import { HeaderContainer, IconExit } from "./header.style";

import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal, Space } from "antd";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);

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
        onOk={logout}
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
