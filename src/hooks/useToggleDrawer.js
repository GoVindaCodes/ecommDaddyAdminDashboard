import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "context/SidebarContext";


const useToggleDrawer = () => {
  const [serviceId, setServiceId] = useState("");
  const [allId, setAllId] = useState([]);
  const [title, setTitle] = useState("");
  const { toggleDrawer, isDrawerOpen, toggleModal, toggleBulkDrawer } =
    useContext(SidebarContext);

  const handleUpdate = (id) => {
    console.log("Updating serviceId with ID:", id);
    setServiceId(id);
    toggleDrawer();
  };

  const handleUpdateMany = (id) => {
    console.log("Updating serviceId with ID:", id);
    setAllId(id);
    toggleBulkDrawer();
  };

  const handleModalOpen = (id, title) => {
    console.log("id openss :", id)
    setServiceId(id);
    toggleModal();
    setTitle(title);
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setServiceId();
    }
  }, [isDrawerOpen]);

  const handleDeleteMany = async (id) => {
    console.log("id manys : ", id)
    setAllId(id);
    toggleModal();
    setTitle(title);
    // setTitle("Selected Products");
  };

  return {
    title,
    allId,
    serviceId,
    handleUpdate,
    setServiceId,
    handleModalOpen,
    handleDeleteMany,
    handleUpdateMany,
  };
};

export default useToggleDrawer;
