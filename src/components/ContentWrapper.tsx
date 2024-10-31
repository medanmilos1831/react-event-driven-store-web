export const ContentWrapper = ({
  headline,
  paragraph,
}: {
  headline?: string;
  paragraph: string;
}) => {
  return (
    <>
      {headline ? (
        <h2 className="text-white font-bold text-2xl border-b  pb-5 mb-5 border-gray-100/20">
          {headline}
        </h2>
      ) : null}
      <p className="text-gray-300 mb-4">{paragraph}</p>
    </>
  );
};
