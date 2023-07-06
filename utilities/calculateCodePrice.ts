type CalculateCodePriceProps = {
  code: Code;
  modifiers: Modifier[];
};

export const calculateCodePrice = ({
  code,
  modifiers,
}: CalculateCodePriceProps) => {
  // this is a fake price calculator
  return (
    code.amount +
    modifiers.reduce((final, modifier) => final + modifier.amount, 0)
  );
};
