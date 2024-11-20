import { mutationCode } from '../../codes/mutationCode';
import {
  ContentWrapper,
  Scroll,
  SyntaxHighlighterWrapper,
  TableWrapper,
} from '../../components';

export const MutationsPage = () => {
  return (
    <div className="h-full w-full relative">
      <Scroll>
        <div>
          <ContentWrapper
            headline="Managing Mutations"
            paragraph="In this section, we'll explore how to manage mutations within your application. Mutations are essential for updating your module's state in a predictable manner. By utilizing the useModuleMutation hook, you can easily trigger state changes with minimal effort. Below is an example of how to implement a mutation that increments a
          counter in your application. This code snippet illustrates the usage
          of the mutate function, allowing you to define the payload and event type
          effectively."
          />
          <SyntaxHighlighterWrapper codeString={mutationCode} />
        </div>
        <TableWrapper
          headline="Properties of mutate"
          list={[
            {
              property: 'payload',
              type: 'any',
              description:
                'The value to be passed to the mutation. This represents the data that will be used to update the state.',
            },
            {
              property: 'event',
              type: 'string',
              description:
                'An optional event that is triggered by this mutation. It indicates the specific action being performed.',
            },
            {
              property: 'commit',
              type: 'string',
              description:
                'The name of the function to execute when the mutation is committed to the module. It defines the operation to be performed.',
            },
            {
              property: 'moduleName',
              type: 'string',
              description:
                'A unique identifier for the module, allowing for clear differentiation between various modules within the application.',
            },
          ]}
        />
      </Scroll>
    </div>
  );
};
