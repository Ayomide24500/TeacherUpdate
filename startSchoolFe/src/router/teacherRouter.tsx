import { createBrowserRouter } from "react-router-dom";
import TeacherDashboard from "../pagesForTeachers/TeacherDashboard";
import LoadingScreen from "../components/static/LoadingScreen";
import TeacherLayout from "../pagesForTeachers/components/layout/TeacherLayout";
import Schedule from "../pagesForTeachers/pages/schedule/Schedule";
import MyClass from "../pagesForTeachers/pages/class/MyClass";
import LessonNote from "../pagesForTeachers/pages/lessonNote/LessonNote";
import Exams from "../pagesForTeachers/pages/exams/Exams";
import WeekReport from "../pagesForTeachers/pages/report/WeekReport";
import ViewStoreItems from "../pagesForTeachers/pages/store/ViewStoreItems";
import StudentDetail from "../pagesForTeachers/pages/class/StudentDetail";
import TeacherSubject from "../pagesForTeachers/pages/subject/Subjects";
import Teacherdetails from "../pagesForTeachers/pages/TeacherDetails/Teacherdetails";
import CreateLesson from "../pagesForTeachers/pages/lessonNote/CreateLessonNote";

export const teacherRouter = createBrowserRouter([
  {
    path: "/",
    element: <TeacherLayout />,
    children: [
      {
        index: true,
        element: <TeacherDashboard />,
      },
      {
        path: "/dashboard",
        index: true,
        element: <TeacherDashboard />,
      },
      {
        path: "my-schedule",
        element: <Schedule />,
      },
      {
        path: "my-class",
        element: <MyClass />,
      },
      {
        path: "my-class/student-details/:studentID",
        element: <StudentDetail />,
      },
      {
        path: "subjects",
        element: <TeacherSubject props={undefined} />,
      },
      {
        path: "lesson-note",
        element: <LessonNote />,
      },
      {
        path: "teacher-details",
        element: <Teacherdetails />,
      },
      {
        path: "create-notes",
        element: <CreateLesson />,
      },
      {
        path: "store",
        element: <ViewStoreItems />,
      },
      {
        path: "exams",
        element: <Exams />,
      },
      {
        path: "week-report",
        element: <WeekReport />,
      },
    ],
  },
  {
    path: "*",
    element: <LoadingScreen />,
  },
]);
