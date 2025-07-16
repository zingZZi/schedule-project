import styled from "styled-components";

const SelectBox = styled.div`
  position: relative;
`;
const SlectedText = styled.button`
  padding: 0 24px;
  font-size: 1.6rem;
  height: 32px;
`;
const CustomDropDown = styled.ul`
  padding: 5px;
  border-radius: 4px;
  box-shadow: 1px 1px 8px 0px rgba(156, 156, 156, 0.5);
  background-color: var(--white-color-100);
  position: absolute;
  min-width: 172px;
  top: 0;
  left: 0;

  li {
    border-radius: 4px;
    font-size: 1.6rem;
    line-height: 2.4rem;
    padding: 4px 7px;
    margin-top: 2px;
    &:first-child {
      margin-top: 0;
    }
    &.on {
      color: var(--primary-color);
    }
    &:hover {
      background-color: rgb(235 173 46 / 50%);
    }
  }
`;

function CustomnSelectBox({
  lists,
  toggle,
  isOpen,
  selectedText,
  listSelect,
  componentRef,
}) {
  return (
    <SelectBox ref={componentRef}>
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
    </SelectBox>
  );
}

export default CustomnSelectBox;
