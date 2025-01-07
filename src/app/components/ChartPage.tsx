import React from "react";
const ChartPage = () => {
  return (
    <div className="h-screen w-full -z-1 md:block">
      <iframe
        style={{
          background: "#F1F5F4",
          border: "none",
          borderRadius: 2,
          boxShadow: "0 2px 10px 0 rgba(70, 76, 79, .2)",
          width: "100%",
          height: "100vh",
        }}
        src="https://charts.mongodb.com/charts-medcodeblogs-nxmomns/embed/dashboards?id=77ed452f-9496-483d-8548-eee465e63d4f&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=scale&scalingHeight=scale"
      />
    </div>
  );
};

export default ChartPage;
