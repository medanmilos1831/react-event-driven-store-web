export const IntroText = () => {
  return (
    <p className="mb-4 text-white">
      The{' '}
      <code className="bg-gray-800 text-gray-200 px-1 rounded">
        EventStoreProvider
      </code>{' '}
      is the foundation of our service, designed to streamline and centralize
      state management across your application. It allows you to configure state
      modules with mutations and getters, enabling your components to interact
      with shared data effortlessly. Each module can define its own state,
      mutations, and getters, while plain JavaScript objects ensure simplicity
      and flexibility. Whether you’re working with basic state or requiring
      advanced updates and custom data accessors, EventStoreProvider provides a
      structured yet adaptable framework for smooth, organized state
      interactions across your app.
    </p>
  );
};
