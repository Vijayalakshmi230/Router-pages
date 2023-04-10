import Wrapper from './calculator/Wrapper/Wapper';
import Screen from './calculator/Screen/Screen';
import ButtonBox from './calculator/ButtonBox/ButtonBox';
import Button from './calculator/Button/Button';


const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const calculator = () => {
  return (
    <Wrapper>
      <Screen value/>
      <ButtonBox>
        {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  console.log(`${btn} clicked!`);
                }}
              />
            );
          })
        }
      </ButtonBox>
    </Wrapper>
  );
};

export default calculator