import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { RiPagesLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdCastForEducation } from "react-icons/md";
import LittleHeader from "../../components/layout/LittleHeader";

const Teacherdetails = () => {
  document.title = "Studen's Subject";

  const pathData = [
    {
      icon: <RiPagesLine size={45} />,
      title: "Lesson Note",
      detail: "All lesson notes provided to students.",
      url: "/lesson-note",
      size: 35,
    },
    {
      icon: <RiPagesLine size={45} />,

      title: "Quiz",
      detail: "All quiz provided to students.",
      url: "/my-personal-info/my-main-info",
      size: 35,
    },
    {
      icon: <HiMiniBuildingOffice2 size={45} />,
      title: "Test",
      detail: "All tests provided to students.",
      url: "/my-personal-info/choose-hospital",
      size: 35,
    },
    {
      icon: <MdCastForEducation size={45} />,
      title: "Exams",
      detail: "All exams provided to students.",
      url: "/my-personal-info/choose-hospital",
      size: 35,
    },
  ];

  return (
    <div>
      <div className="min-h-[82vh] text-blue-950">
        <LittleHeader name={document.title} />
        <div className="w-full m-auto py-8 my-4 flex gap-24 max-lg:block max-md:pt-1">
          {/* profile Account Detail */}
        </div>

        {/* profile Account Detail Card */}

        <div
          className="my-6 text-blue-950 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-2 transition-all duration-300 lg:[&>:nth-child(3)]:col-span-2 xl:[&>:nth-child(3)]:col-span-1
        "
        >
          {pathData.map((props: any, i: number) => (
            <Link to={`${props.url}`} key={i} className="text-black">
              <div className="min-w-[300px] border rounded-md p-3 min-h-[200px] text-blue-950 shadow-md flex flex-col hover:shadow-lg">
                <div className="flex-1  text-blue-950">{props.icon}</div>

                <div className="font-[500] mb-2 text-[20px]">{props.title}</div>
                <div className="text-[15px] leading-4 font-[300]">
                  {props.detail}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex-1 " />
      </div>
    </div>
  );
};

export default Teacherdetails;
