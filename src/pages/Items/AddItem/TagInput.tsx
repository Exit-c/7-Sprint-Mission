import { ChangeEvent, KeyboardEvent, MouseEvent, useState } from "react";
import deleteIcon from "../../../assets/ic_X.svg";
import deleteHoverIcon from "../../../assets/ic_X_hover.svg";
import { IsValid } from "./AddItem";

interface TagInputProps {
  isValueCheck: (currentValue: string | string[], name: keyof IsValid) => void;
}

const TagInput = ({ isValueCheck }: TagInputProps) => {
  const [tagArr, setTagArr] = useState<Set<string>>(new Set());
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setTagArr((prev) => new Set([...prev, inputValue.trim()]));
      setInputValue("");
      isValueCheck(inputValue, "tag");
    }
  };

  const handleDeleteClick = (tagName: string) => {
    const deleteTag = [...tagArr].filter((tag) => tagName !== tag);

    setTagArr(new Set([...deleteTag]));
    isValueCheck(deleteTag, "tag");
  };

  return (
    <>
      <label htmlFor="item-tag">태그</label>
      <input
        type="text"
        placeholder="태그를 입력해주세요"
        value={inputValue}
        onKeyUp={handleKeyUp}
        onChange={handleInputChange}
      />
      {[...tagArr].map((tag, index) => (
        <div key={index} className="tag-box">
          <div className="tag-flex">
            <span>{tag}</span>
            <button type="button" onClick={() => handleDeleteClick(tag)}>
              <img
                src={deleteIcon}
                alt="삭제아이콘"
                onMouseEnter={(e: MouseEvent<HTMLImageElement>) =>
                  ((e.target as HTMLImageElement).src = deleteHoverIcon)
                }
                onMouseLeave={(e: MouseEvent<HTMLImageElement>) =>
                  ((e.target as HTMLImageElement).src = deleteIcon)
                }
              />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default TagInput;
