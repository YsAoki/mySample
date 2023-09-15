import React, { FC, useState } from "react";
import Td from "../../01atoms/TableParts/Td";
import Button from "../../01atoms/Button";
import { DataType } from "../../03organisms/ApiGetList01";
import ForEditModal from "../forEditModal";
import ForDeleteCheckModal from "../ForDeleteCheckModal";

const ReceiveTr: FC<DataType> = ({ userId, id, title, body }) => {
  const [viewEditModal, setViewEditModal] = useState(false);
  const clickButtonEditModalEvent = () => {
    setViewEditModal(!viewEditModal);
  };

  const [viewDeleteModal, setViewDeleteModal] = useState(false);
  const clickButtonDeleteModalEvent = () => {
    setViewDeleteModal(!viewDeleteModal);
  };

  return (
    <>
      <tr>
        <Td width="10%">{id}</Td>
        <Td width="10%">{userId}</Td>
        <Td width="20%">{title}</Td>
        <Td width="50%">{body}</Td>
        <Td width="5%">
          <Button onClick={clickButtonEditModalEvent}>編</Button>
        </Td>
        <Td width="5%">
          <Button onClick={clickButtonDeleteModalEvent}>消</Button>
        </Td>
      </tr>
      {viewEditModal && (
        <ForEditModal
        id={id}
          body={body}
          clickEditModalEvent={clickButtonEditModalEvent}
        />
      )}
      {viewDeleteModal && (
        <ForDeleteCheckModal
          id={id}
          clickDeleteModalEvent={clickButtonDeleteModalEvent}
        />
      )}
    </>
  );
};

export default ReceiveTr;
