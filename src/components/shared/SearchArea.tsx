import MenuTemplate from "@/components/account/AccountStatusMenu"
import SearchBtn from "@/components/shared/buttons/SearchBtn"
import InputTemplate from "@/components/shared/InputTemplate"

const SearchArea = () => {
  return (
    <div className="grid grid-cols-5">
      <InputTemplate
        title="教師email查詢"
        placeholder="請輸入要查詢的教師email"
        tailwindClass="col-span-2"
      />
      <InputTemplate
        title="教師姓名查詢"
        placeholder="請輸入要查詢的教師姓名"
        tailwindClass="col-span-2"
      />
      <SearchBtn onClick={() => {}} />
      <MenuTemplate title="帳號狀態" tailwindClass="col-span-2" />
    </div>
  )
}

export default SearchArea
