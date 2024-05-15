import ShareBtn from "@/components/shared/buttons/ShareBtn"
import InputTemplate from "@/components/shared/InputTemplate"
import { getClassroomByIdResponse } from "@/mockServer/mockData/dataManagement/classrooms"

export default function Header() {
  return (
    <div className="grid grid-cols-5 gap-x-10 gap-y-5">
      <InputTemplate
        title="班級ID"
        placeholder="班級ID"
        value={getClassroomByIdResponse()?.classroom_id}
        tailwindClass="col-span-2"
        disabled
      />
      <InputTemplate
        title="班級名稱"
        placeholder="班級名稱"
        value={getClassroomByIdResponse()?.classroom_name}
        tailwindClass="col-span-2"
      />
      <div className="flex items-end">
        <ShareBtn onClick={() => {}} />
      </div>
      <InputTemplate
        title="Owner"
        placeholder="Owner"
        value={getClassroomByIdResponse()?.owner.user_name}
        tailwindClass="col-span-2"
        disabled
      />
      <InputTemplate
        title="班級作文平均分數"
        placeholder="班級作文平均分數"
        value={getClassroomByIdResponse()?.article_score_avg.toString()}
        tailwindClass="col-span-2"
        disabled
      />
    </div>
  )
}
