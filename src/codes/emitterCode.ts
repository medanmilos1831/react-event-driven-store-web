export const emit = `import { useEmitEvent } from "react-event-driven-store";

const SomeComponent = () => {
  const emitEvent = useEmitEvent();

  return (
    <>
      <span>SomeComponent</span>
      <button
        onClick={() =>
          emitEvent("EMIT_AGE", {
            age: 50,
          })
        }
      >
        Emit event
      </button>
    </>
  );
};

export { SomeComponent };`;

export const onEmit = `import { useOnEvent } from "react-event-driven-store";

const SomeComponentTwo = () => {
  useOnEvent("EMIT_AGE", (data) => {
    console.log("on event", data);
  });
  return <></>;
};

export { SomeComponentTwo };`;
