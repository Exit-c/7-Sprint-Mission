import { MouseEvent, useState } from "react";
import styles from "@/components/SelectBtn.module.css";
import Image from "next/image";
import sort_ic from "@/public/ic_sort.svg";

interface Props {
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
}
// 컴포넌트의 범용성을 위해 props로 데이터를 전달받으면 전달한 데이터에 대한 셀렉트박스가 생성되게 하고 싶었으나 실패...
export default function SelectBtn({ order, setOrder }: Props) {
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const handleOrderSelectClick = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleDropdownClick = (e: MouseEvent<HTMLLIElement>) => {
    const target = e.currentTarget;

    setOrder(target.id === "recent" ? "recent" : "like");
  };

  return (
    <div className={styles["order-wrap"]}>
      <button
        type="button"
        className={styles["order-select"]}
        onClick={handleOrderSelectClick}
      >
        {order === "recent" ? "최신순" : "좋아요순"}
      </button>
      <button
        type="button"
        title="정렬버튼"
        className={styles["mobile-order-select"]}
        onClick={handleOrderSelectClick}
      >
        <Image
          src={sort_ic}
          alt="정렬아이콘"
          width="24"
          height="24"
          className={styles["order-select-img"]}
        />
      </button>
      {isDropdownVisible && (
        <ul className={styles["order-dropdown"]}>
          <li
            className={styles["order-option"]}
            id="recent"
            onClick={handleDropdownClick}
          >
            최신순
          </li>
          <li
            className={styles["order-option"]}
            id="like"
            onClick={handleDropdownClick}
          >
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
}
