export const TableWrapper = ({
  headline,
  list,
}: {
  headline: string;
  list: { property: string; description: string; type: string }[];
}) => {
  return (
    <>
      <h3 className="text-2xl font-semibold mb-4 text-white">{headline}</h3>
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
            {list.map((item) => (
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
    </>
  );
};
