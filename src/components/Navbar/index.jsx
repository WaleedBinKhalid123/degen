import React, { useState } from "react";
import "./styles.scss";
import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { MdOutlineLegendToggle } from "react-icons/md";
import { GoQuestion } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";

const Index = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showWalletModal, setShowWalletModal] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar expand="md" className="navbarWrapper px-3 py-4">
      <svg fill="currentColor" viewBox="0 0 789 668" className="logo">
        <path d="M115.185 411.477L118.367 469.444C118.575 473.392 120.055 477.107 122.552 480.15C140.007 501.282 218.264 575.014 394.616 575.014C570.968 575.014 648.278 502.234 666.38 480.544C669.108 477.27 670.68 473.206 670.934 468.933L674.089 411.517C695.084 399.997 716.758 386.98 716.758 386.98C750.835 368.518 788.866 395.038 788.935 433.936C789.051 496.87 739.877 561.545 673.548 602.301C598.758 648.258 487.117 667.324 394.664 667.324C302.211 667.324 190.57 648.258 115.78 602.301C49.4513 561.545 0.277187 496.893 0.392781 433.936C0.462138 395.038 38.4929 368.518 72.5702 386.98C72.5702 386.98 94.207 399.965 115.185 411.477Z"></path>
        <path d="M394.641 0.113525C538.834 0.113525 577.929 3.48079 636.558 10.2154H636.535C663.561 13.3272 685.224 33.438 683.212 60.6782L661.616 354.872C654.858 356.83 647.488 359.303 639.223 362.077C595.905 376.615 527.997 399.404 394.64 399.404C261.283 399.404 193.376 376.615 150.057 362.077C141.784 359.3 134.407 356.825 127.643 354.866L106.047 60.6782C104.059 33.438 125.652 12.8395 152.724 10.2154C210.637 4.59548 270.932 0.113525 394.641 0.113525ZM137.991 495.835L138.067 496.869L139.557 497.212C139.024 496.748 138.502 496.289 137.991 495.835ZM649.85 497.178L651.193 496.869L651.262 495.928C650.8 496.341 650.329 496.757 649.85 497.178Z"></path>
      </svg>
      {isOpen && (
        <RxCross2
          onClick={toggle}
          className="navbar-toggler bg-transparent"
          size={45}
        />
      )}
      {!isOpen && (
        <MdOutlineLegendToggle
          onClick={toggle}
          size={45}
          className="bg-transparent navbar-toggler"
        />
      )}

      <Collapse isOpen={isOpen} navbar>
        <Nav className="mx-auto gap-5" navbar>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Airdrops
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Airdop 1</DropdownItem>
              <DropdownItem>Airdop 2</DropdownItem>
              <DropdownItem>Liquidity Mining</DropdownItem>
              <DropdownItem>FAQ</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Bounties
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Frames Bounty</DropdownItem>
              <DropdownItem>Logo Bounty</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Developers
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>API</DropdownItem>
              <DropdownItem>Grants</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <NavItem>
            <NavLink href="/components/">Components</NavLink>
          </NavItem>
        </Nav>
        <Button className="navbarBtn" onClick={() => setShowWalletModal(true)}>
          Connect
        </Button>
      </Collapse>

      <div>
        <Modal
          isOpen={showWalletModal}
          size="sm"
          toggle={() => setShowWalletModal(!showWalletModal)}
        >
          <ModalBody>
            <div className="d-flex customHeader justify-content-between align-items-center py-3 px-3 bg-transparent">
              <GoQuestion
                className="bg-transparent"
                style={{ cursor: "pointer" }}
              />
              <p className="mb-0 bg-transparent fw-bold">Connect Wallet</p>
              <RxCross2
                className="bg-transparent"
                style={{ cursor: "pointer" }}
                onClick={() => setShowWalletModal(false)}
              />
            </div>
            <div className="px-2 bg-transparent mb-3">
              <div className="d-flex align-items-center gap-2 walletWrapper p-1 mt-3">
                <img
                  src="/walletconnect.webp"
                  width={40}
                  alt="WalletConnect"
                  className="walletImage"
                />
                <p className="mb-0 bg-transparent">WalletConnect</p>
              </div>
              <div className="d-flex align-items-center gap-2 walletWrapper p-1 mt-3">
                <img
                  src="/metamask.webp"
                  width={40}
                  alt="WalletConnect"
                  className="walletImage"
                />
                <p className="mb-0 bg-transparent">MetaMask</p>
              </div>
              <div className="d-flex align-items-center gap-2 walletWrapper p-1 mt-3">
                <img
                  src="/trustwallet.webp"
                  width={40}
                  alt="WalletConnect"
                  className="walletImage"
                />
                <p className="mb-0 bg-transparent">Trust Wallet</p>
              </div>
              <div className="d-flex align-items-center gap-2 walletWrapper p-1 mt-3">
                <img
                  src="/coinbase.webp"
                  width={40}
                  alt="WalletConnect"
                  className="walletImage"
                />
                <p className="mb-0 bg-transparent">Coinbase</p>
              </div>
              <div className="d-flex align-items-center gap-2 walletWrapper p-1 mt-3">
                <img
                  src="/walletconnect.webp"
                  width={40}
                  alt="WalletConnect"
                  className="walletImage"
                />
                <p className="mb-0 bg-transparent">All Wallets</p>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </Navbar>
  );
};

export default Index;
