import { Dashboard } from "./components/dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal';
import React from "react";

export function App() {

    Modal.setAppElement('#root');

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = React.useState(false);
  
    function newTransaction() {
      setIsNewTransactionModalOpen(true);
    }
  
    function closeModal() {
      setIsNewTransactionModalOpen(false);
    }

  return (
    <>
      <Header onOpenNewTransactionModal={newTransaction} />
      <Dashboard />
       <Modal 
      isOpen={isNewTransactionModalOpen}
      onRequestClose={closeModal} >
          <h2>hELLO ItsS Are YU LukinG fo</h2>
       </Modal>
      <GlobalStyle />
    </>
  );
}

