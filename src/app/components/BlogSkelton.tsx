const TableSkeleton = () => {
  return (
    <table className="overflow-y-hidden rounded-lg border w-full">
      <thead className="w-full">
        <tr className="bg-mainColor w-min justify-between text-xs font-semibold uppercase text-white">
          <th className="px-5 py-3">Title</th>
          <th className="px-5 py-3 sm:hidden">Slug</th>
          <th className="px-5 py-3">Status</th>
          <th className="px-5 py-3 md:hidden">Date Publish</th>
          <th className="px-5 py-3">Delete/Edit</th>
        </tr>
      </thead>
      <tbody>
        {Array(5) // Number of skeleton rows you want to show
          .fill("")
          .map((_, index) => (
            <tr
              key={index}
              className="animate-pulse p-2 px-4 py-5 w-full justify-between border border-gray-300 bg-gray-100"
            >
              <td className="p-2">
                <div className="h-4 bg-gray-300 rounded w-24"></div>
              </td>
              <td className="px-5 sm:hidden">
                <div className="h-4 bg-gray-300 rounded w-20"></div>
              </td>
              <td className="px-5">
                <div className="h-4 bg-gray-300 rounded w-16"></div>
              </td>
              <td className="px-5 md:hidden">
                <div className="h-4 bg-gray-300 rounded w-28"></div>
              </td>
              <td className="flex space-x-2 sm:space-x-0 p-2 sm:flex-col justify-center">
                <div className="h-8 bg-gray-300 rounded w-16 xs:mb-2"></div>
                <div className="h-8 bg-gray-300 rounded w-16"></div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default TableSkeleton;
