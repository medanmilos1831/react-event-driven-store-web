export const mutationCode = `export const SomeComponent = () => {
  const { mutateState } = useStateMutation();
  return (
    <>
      <button
        onClick={() => {
          mutateState({
            payload: 1,
            event: 'INC',
            commit: 'inc',
            moduleName: 'counter',
          });
        }}
      >
        Increment Counter
      </button>
    </>
  );
};

// mutation: {
//   inc(value) {
//     console.log('EXECUTE')
//     this.counter = this.counter + value.payload;
//   },
// },
`;
