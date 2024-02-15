import { Link } from "react-router-dom";
import Button from "../../components/reUse/Button";
import { useSchoolTeacherDetail } from "../../../pages/hook/useSchoolAuth";
import { FC } from "react";
import pix from "../../../assets/pix.jpg";

document.title = "view teacher subject";

interface iProp {
  props: any;
}
const TeacherSubject: FC<iProp> = ({ props }) => {
  const { schoolSubjectTeacherDetail } = useSchoolTeacherDetail(props);

  return (
    <div className="">
      <div className="avatar">
        <div className="mask mask-squircle w-12 h-12">
          <img
            src={pix}
            {...(schoolSubjectTeacherDetail?.avatar
              ? schoolSubjectTeacherDetail?.avatar
              : pix)}
            alt="Avatar"
          />
        </div>
      </div>
      <div>
        <div className="font-bold">Teacher subjects</div>
        <div className="text-[12px] opacity-50 ">Subject teacher taking</div>
      </div>

      <div
        className="py-6 px-2 border rounded-md min-w-[300px] overflow-y-hidden mt-9"
        style={{ color: "var(--secondary)" }}
      >
        <div className="text-[gray] flex gap-9 text-[12px] font-medium uppercase mb-10 px-4">
          <div className="w-[130px] border-r">Teacher Subject</div>
          <div className="w-[130px] border-r">No Of Exams</div>
          <div className="w-[150px] border-r">Description</div>
          <div className="w-[150px] border-r">No of Quiz</div>
          <div className="w-[200px] border-r">View Details</div>
        </div>

        <div className=" w-full overflow-hidden">
          <div>
            <div>
              <div className="w-full flex items-center gap-9 text-[12px] font-medium  h-16 px-4 my-2 overflow-hidden">
                <div className="w-[130px] border-r text-black">None</div>
                <div className="w-[130px] border-r text-black">None</div>
                <div className="w-[150px] border-r text-black">None</div>
                <div className="w-[150px] border-r text-black">None</div>
                <Link to="/teacher-details">
                  <Button
                    name="view all subject"
                    className="py-2 px-10 bg-black text-white  hover:bg-neutral-800 transition-all duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherSubject;
