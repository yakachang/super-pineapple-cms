import AccountStatusMenu from "@/components/account/AccountStatusMenu"
import InputTemplate from "@/components/shared/InputTemplate"

const TeacherInfoArea = () => {
  return (
    <div className="grid grid-cols-2 gap-x-10 gap-y-5">
      <InputTemplate
        title="教師email"
        placeholder="請輸入教師信箱"
        tailwindClass=""
      />
      <InputTemplate
        title="教師姓名"
        placeholder="請輸入教師姓名"
        tailwindClass=""
      />
      <AccountStatusMenu title="帳號狀態" tailwindClass="" />
    </div>
  )
}

export default TeacherInfoArea
