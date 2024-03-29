import useSWR from "swr";
import {
  readClassInfoStudent,
  readClassInfoSubject,
  readTeacherCookie,
  readTeacherSchedule,
  viewTeacherDetail,
} from "../api/teachersAPI";

export const useTeacherCookie = () => {
  const { data: staffID } = useSWR(`api/read-teacher-cookie/`, () => {
    return readTeacherCookie().then((res: any) => {
      return res.data;
    });
  });
  return { staffID };
};

// export const useSchoolData = () => {
//   const { dataID } = useSchoolCookie();

//   const { data, isLoading } = useSWR(`api/view-school/${dataID}`, () => {
//     return readSchool(dataID!).then((res) => {
//       return res.data;
//     });
//   });
//   return { data, isLoading };
// };

export const useTeacherDetail = (teacherID: string) => {
  const { data: teacherDetail } = useSWR(
    `api/view-teacher-detail/${teacherID}`,
    () => {
      return viewTeacherDetail(teacherID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { teacherDetail };
};

export const useTeacherInfo = () => {
  const { staffID } = useTeacherCookie();

  const { data: teacherInfo } = useSWR(
    `api/view-teacher-detail/${staffID}`,
    () => {
      return viewTeacherDetail(staffID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { teacherInfo };
};

export const useClassSubject = (classID: string) => {
  const { data: subjectData } = useSWR(
    `api/view-teacher-detail/${classID}`,
    () => {
      return readClassInfoSubject(classID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { subjectData };
};

export const useClassTimeTable = (classID: string) => {
  const { data: timetableData } = useSWR(
    `api/view-teacher-detail/${classID}`,
    () => {
      return readClassInfoSubject(classID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { timetableData };
};

export const useTeacherSchedule = (teacherID: string) => {
  const { data: teacherSchedule } = useSWR(
    `api/view-teacher-schedule/${teacherID}`,
    () => {
      return readTeacherSchedule(teacherID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { teacherSchedule };
};

export const useTeacherStudent = (classID: string) => {
  const { data: teacherSchedule } = useSWR(
    `api/view-teacher-schedule/${classID}`,
    () => {
      return readTeacherSchedule(classID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { teacherSchedule };
};

export const useClassStudent = (classID: string) => {
  const { data: classStudents } = useSWR(
    `api/view-class-students/${classID}`,
    () => {
      return readClassInfoStudent(classID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { classStudents };
};
