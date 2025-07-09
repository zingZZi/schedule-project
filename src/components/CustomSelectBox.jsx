import styled from "styled-components";

const SlectedText = styled.button`
  padding: 0 24px;
`;
const CustomDropDown = styled.ul``;

function CustomnSelectBox({ lists, toggle, isOpen, selectedText, listSelect }) {
  return (
    <div className="SelectBox">
      <SlectedText onClick={toggle} type="button">
        {selectedText}
      </SlectedText>
      {isOpen ? (
        <CustomDropDown>
          {lists.map((list, i) => {
            return (
              <li
                key={i}
                data-list={list}
                onClick={listSelect}
                className={list === selectedText ? "on" : null}
              >
                {list}
              </li>
            );
          })}
        </CustomDropDown>
      ) : null}
    </div>
  );
}

export default CustomnSelectBox;
