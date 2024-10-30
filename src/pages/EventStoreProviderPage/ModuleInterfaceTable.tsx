export const ModuleInterfaceTable = () => {
  return (
    <div className="bg-gray-900 p-6 mb-5">
      <table className="min-w-full divide-y divide-gray-700">
        <thead>
          <tr>
            <th className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">
              Property
            </th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
              Description
            </th>
            <th className="px-3 py-3.5 text-left text-sm font-semibold text-white">
              Type
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800">
          {[
            {
              property: 'moduleName',
              description:
                'A unique identifier for the module, allowing for clear differentiation between various modules within the application.',
              type: 'string',
            },
            {
              property: 'state',
              description:
                'The initial state of the module, defined as a plain JavaScript object. This state can be modified through mutations.',
              type: 'unknown',
            },
            {
              property: 'mutation',
              description:
                'Defines functions to change the state of the module. Mutations are essential for modifying state in a predictable manner.',
              type: '{ [key: string]: (this: unknown, args: any) => void } | undefined',
            },
            {
              property: 'getters',
              description:
                'Functions that retrieve specific pieces of state. Getters allow for organized access to state values from components.',
              type: '{ [key: string]: (this: unknown) => any }',
            },
          ].map((item) => (
            <tr key={item.property}>
              <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                <code className="bg-gray-700 text-gray-200 px-1 rounded">
                  {item.property}
                </code>
              </td>
              <td className="whitespace-normal py-4 pl-4 pr-3 text-sm text-gray-300 break-words max-w-[300px]">
                {item.description}
              </td>
              <td className="whitespace-normal py-4 pl-4 pr-3 text-sm text-gray-300 break-words max-w-[150px]">
                {item.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
