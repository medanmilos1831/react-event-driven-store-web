export const mutationCode = `export const SomeComponent = () => {
  const { mutate } = useModuleMutation('counter');
  return (
    <>
      <button
        onClick={() =>
          mutate({
            payload: 1,
            event: 'INC',
            commit: 'inc',
          })
        }
      >
        Increment age
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
