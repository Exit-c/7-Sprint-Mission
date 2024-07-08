import { ChangeEvent, useState } from "react";
import { IsValid } from "./AddItem";

interface TitleInputProps {
  isValueCheck: (currentValue: string, name: keyof IsValid) => void;
}

const TitleInput = ({ isValueCheck }: TitleInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputBlur = () => {
    isValueCheck(inputValue, "title");
  };

  return (
    <>
      <label htmlFor="item-title">상품명</label>
      <input
        type="text"
        id="item-title"
        name="item-title"
        placeholder="상품명을 입력해주세요"
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
      />
    </>
  );
};

export default TitleInput;
