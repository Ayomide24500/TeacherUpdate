import { FC } from "react";
import { useSchoolData } from "../../pages/hook/useSchoolAuth";
import Chart from "./Chart";

const Personal: FC = () => {
  const { data } = useSchoolData();

  // let costMonth = _.groupBy(studioBookings, (item) =>
  //   new Date(item?.createdAt).getMonth()
  // );

  // _.forEach(costMonth, (data, month) => {
  //   sumByMonth[month!] = _.sumBy(data, "cost");
  // });

  // let values: any = Object.values(sumByMonth);

  // let studioCreated = _.groupBy(studio, (item) =>
  //   new Date(item?.createdAt).getMonth()
  // );
  // let clientsCreated = _.groupBy(data, (item) =>
  //   new Date(item?.createdAt).getMonth()
  // );

  // const data = Array.from({ length: 3 });

  return (
    <div>
      <div className="mb-2 text-blue-950">
        <p className="font-bold"></p>
        <div className="grid grid-cols-2 gap-3 mt-2">
          <div className="border rounded-md min-h-[100px] p-4">
            <p className="font-medium leading-tight">Total Students:</p>

            <h1 className="text-[40px] font-medium">
              {data?.students?.length}
            </h1>
          </div>

          {/* <div className="border rounded-md min-h-[60px] p-4">
            <p className="font-medium leading-tight">Total Teachers Hired:</p>

            <h1 className="text-[40px] font-medium">{data?.staff?.length}</h1>
          </div> */}
          <div className="border rounded-md min-h-[60px] p-4">
            <p className="font-medium leading-tight">Total Subjects</p>

            <h1
              className="text-[25px] mt-5 font-bold"
              style={{ color: "var(--primary)" }}
            >
              {data?.subjects?.length}
              <span className="text-[12px]"></span>
            </h1>
          </div>
          {/* <div className="border rounded-md min-h-[100px] p-4">
            <p className="font-medium leading-tight">Total Classrooms</p>

            <h1 className="text-[25px] mt-5  font-bold break-words leading-tight">
              {data?.classRooms?.length}
            </h1>
          </div> */}
        </div>
      </div>
      <div className="border-t my-5" />
      <div className="w-full">
        <p>Chart</p>

        <Chart />

        <p className="text-[12px]">Male vs Female</p>
      </div>
    </div>
  );
};

export default Personal;
