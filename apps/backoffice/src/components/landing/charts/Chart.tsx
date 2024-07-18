import DoughnutChart from "./DoughnutChart";
import LineChart from "./LineChart";

export default function Chart() {
  return (
    <div className="flex flex-col items-center -mt-32">
      <div className="flex justify-center p-8 max-w-4xl w-full">
        <div className="flex rounded-md shadow-xl p-8 w-11/12 h-[28rem] text-base bg-white">
          <LineChart />
        </div>
        <div className="absolute -bottom-28 lg:bottom-0 right-0 lg:right-28 w-64 mr-4 mb-4 min-h-64 rounded-full bg-white"></div>
        <div className="absolute -bottom-28 lg:bottom-0 right-0 lg:right-28 w-min min-h-72 rounded-full">
          <DoughnutChart />
        </div>
      </div>
    </div>
  );
}
