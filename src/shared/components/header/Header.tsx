import { useNavigate } from "react-router-dom";
import { logout } from "../../functions/connection/auth";
import { HeaderContainer, IconExit } from "./header.style";

import { Modal } from "antd";
import { useState } from "react";
import { HeaderTestIdEnum } from "./HeaderTestId.enum";

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
        data-testid={HeaderTestIdEnum.HEADER_MODAL}
        open={open}
        onOk={() => logout(navigate)}
        onCancel={hideModal}
        okText="Sim"
        cancelText="Cancelar"
      >
        <p data-testid={HeaderTestIdEnum.HEADER_MODAL_P}>
          Tem certeza que deseja sair?
        </p>
      </Modal>
      <HeaderContainer data-testid={HeaderTestIdEnum.HEADER_CONTAINER}>
        <IconExit
          onClick={showModal}
          data-testid={HeaderTestIdEnum.HEADER_LOGO}
        />
      </HeaderContainer>
    </>
  );
};

export default Header;
