export const selectorCode = `import { useModuleSelector } from "react-event-driven-store";

const SomeComponent = () => {
  const { value } = useModuleSelector<number>({
    getterName: 'getCounter',
    updateOnEvents: ['INC'],
    moduleName: 'counter',
  });

  return (
    <>
      <span>Counter Value: {value}</span>
    </>
  );
};

export { SomeComponent };`;
