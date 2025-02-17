import styles from "./NewGroupModal.module.css";
import Image from "next/image";
import Check_White from "../../../../public/assets/check_white.svg";
import { useState } from "react";
import { createGroup } from "../../_utils/api";
import queryClient from "@/app/_utils/queryClient";
import { useMutation } from "@tanstack/react-query";

const NewGroup = ({
  closeNewGroupModal,
}: {
  closeNewGroupModal: () => void;
}) => {
  const localTokenData = localStorage.getItem("tokenData");
  if (localTokenData === null) throw new Error("Token is not found");
  const tokenData = JSON.parse(localTokenData);

  const [groupName, setGroupName] = useState("");

  const { mutate: createNewGroup } = useMutation({
    mutationFn: () => createGroup(groupName),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["groupListData"] }),
  });

  const handleCreateGroup = () => {
    if (groupName !== "") {
      createNewGroup();
    }
    closeNewGroupModal();
  };
  return (
    <div className={styles.background} onClick={closeNewGroupModal}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h1 className={styles.title}>새 저장 그룹</h1>
        </div>
        <div className={styles.inputWrap}>
          <input
            type="text"
            placeholder="그룹 이름을 입력하세요."
            className={styles.input}
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
          />
        </div>
        <button className={styles.btnWrap} onClick={handleCreateGroup}>
          <Image src={Check_White.src} alt="check" width={14} height={14} />
          <h1 className={styles.doneText}>완료</h1>
        </button>
      </div>
    </div>
  );
};

export default NewGroup;
