export const GenericTypeModule = () => {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flow-root">
        <div className="-mx-4 -my-2 overflow-hidden sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold text-white mb-4">
              Generic Type Safety
            </h2>
            <p className="text-gray-300 mb-4">
              The{' '}
              <code className="bg-gray-700 text-gray-200 px-1 rounded">
                EventStoreProvider
              </code>{' '}
              is designed as a generic component, allowing you to specify the
              type of the module when creating an instance. By using a syntax
              like{' '}
              <code className="bg-gray-700 text-gray-200 px-1 rounded">
                [&lt;ModuleType&lt;ICounter&gt;&gt;]
              </code>
              , you can achieve type safety throughout your application.
            </p>
            <p className="text-gray-300 mb-4">
              This means that the state and methods defined in the{' '}
              <code className="bg-gray-700 text-gray-200 px-1 rounded">
                ICounter
              </code>{' '}
              interface will be strictly enforced, preventing errors related to
              type mismatches and ensuring that your components interact with
              the module's state and methods correctly.
            </p>
            <p className="text-gray-300">
              Overall, utilizing generic types in the{' '}
              <code className="bg-gray-700 text-gray-200 px-1 rounded">
                EventStoreProvider
              </code>{' '}
              enhances code reliability and maintainability by providing clear
              contracts for module behavior.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
