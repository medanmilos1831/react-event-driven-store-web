export const selectorCode = `import { useModuleSelector } from "react-event-driven-store";

const SomeComponent = () => {
  const { value } = useModuleSelector<{
    counter: number;
  }>({
    getterName: "getCounter",
    events: ["INC"],
    moduleName: "counter",
  });

  let { counter } = value;

  return (
    <>
      <span>Counter Value: {counter}</span>
    </>
  );
};

export { SomeComponent };`;
