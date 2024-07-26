import { MouseEvent, useState } from "react";
import Image from "next/image";
import styles from "@/components/SelectBtn.module.css";
import { Order } from "@/lib/type";
import { orderTypeKR } from "@/constants/constants";
import sort_ic from "@/public/ic_sort.svg";

interface Props {
  order: Order;
  setOrder: React.Dispatch<React.SetStateAction<Order>>;
  options: Order[];
}

export default function SelectBtn({ order, setOrder, options }: Props) {
  const [isDropdownVisible, setIsDropdownVisible] = useState<boolean>(false);

  const handleOrderSelectClick = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  const handleDropdownClick = (option: Order) => {
    setOrder(option);
  };

  return (
    <div className={styles["order-wrap"]}>
      <button
        type="button"
        className={styles["order-select"]}
        onClick={handleOrderSelectClick}
      >
        {orderTypeKR[order]}
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
          {options.map((option) => {
            return (
              <li
                className={styles["order-option"]}
                id="recent"
                onClick={() => handleDropdownClick(option)}
              >
                {orderTypeKR[option]}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
