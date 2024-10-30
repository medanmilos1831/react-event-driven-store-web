export const MutatonDetails = () => {
  return (
    <div className="bg-gray-900 mb-5">
      <div className="mx-auto max-w-7xl">
        <div className="bg-gray-900 py-3">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flow-root">
              <div className="-mx-4 -my-2 overflow-hidden sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y divide-gray-700 mt-5">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0"
                        >
                          Property
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          Description
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-white"
                        >
                          Type
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-800">
                      {[
                        {
                          props: 'payload',
                          type: 'any',
                          desc: 'The value to be passed to the mutation. This represents the data that will be used to update the state.',
                        },
                        {
                          props: 'event',
                          type: 'string',
                          desc: 'An optional event that is triggered by this mutation. It indicates the specific action being performed.',
                        },
                        {
                          props: 'commit',
                          type: 'string',
                          desc: 'The name of the function to execute when the mutation is committed to the module. It defines the operation to be performed.',
                        },
                      ].map((item) => (
                        <tr key={item.props}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">
                            <code className="bg-gray-700 text-gray-200 px-1 rounded">
                              {item.props}
                            </code>
                          </td>
                          <td className="whitespace-normal py-4 pl-4 pr-3 text-sm text-gray-300 break-words max-w-[300px]">
                            {item.desc}
                          </td>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-300">
                            {item.type}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
