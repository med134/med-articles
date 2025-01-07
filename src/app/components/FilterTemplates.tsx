import React from "react";
import { FilterTemplate } from "./ProjectArrays";

interface FilterTemplatesProps {
  handleTagClick: (tag: string) => void;
  seAttCat: () => void;
}
const FilterTemplates: React.FC<FilterTemplatesProps> = ({
  handleTagClick,
  seAttCat,
}) => {
  return (
    <div className="filter templates">
      <div className="container mx-auto px-10 sm:px-2">
        <div className="p-6">
          <span className="text-lg font-semibold mb-4">Categories Cloud</span>

          <div className="flex flex-wrap gap-2 pt-4">
            <button
              onClick={seAttCat}
              className="bg-green-200 hover:bg-green-300 py-1.5 px-3 rounded-lg text-sm dark:bg-dark dark:border"
            >
              All Templates
            </button>
            {FilterTemplate?.map((item) => {
              return (
                <button
                  key={item.name}
                  onClick={() => handleTagClick(item.name)}
                  className={item.className}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterTemplates;
