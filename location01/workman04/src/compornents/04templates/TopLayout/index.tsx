import React, { FC, useState } from "react";
import { GetLocationTypes } from "../../../types/getLocationTypes";
import Header from "../../03organisms/Header";
import CardBox from "../../03organisms/CardBox";
import Modal from "../../03organisms/Modal";

type Props = {
  locationData: GetLocationTypes[];
};

const TopLayout: FC<Props> = ({ locationData }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      {modalOpen && (
        <Modal closeModal={closeModal}>
          <p>モーダル</p>
        </Modal>
      )}
      <Header />
      <button onClick={openModal}>絞り込みを開く</button>
      <CardBox locationData={locationData} />
    </>
  );
};

export default TopLayout;
