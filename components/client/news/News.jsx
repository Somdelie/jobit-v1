const formatDate = (createdAt) => {
  const date = new Date(createdAt);
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  const formattedDate = date
    .toLocaleDateString("en-GB", options)
    .replace(",", ""); // Removing comma after the day

  return formattedDate;
};

const Article = ({ articles }) => {
  return (
    <div>
      <div className="mt-8">
        {articles?.map((article) => (
          <div
            key={article.id}
            className=" border-l-2 overflow-hidden relative border-roseRed pb-8 pl-4"
          >
            <div className="w-1/2 flex items-center">
              <p className="text-sm text-gray-300 bg-[#1e3a8a] p-1 rounded dark:text-gray-400">
                {formatDate(article.createdAt)}
              </p>
            </div>
            <div className="absolute bg-roseRed h-4 w-4 bottom-3 rotate-45 -left-2"></div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {article.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              {article.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Article;
