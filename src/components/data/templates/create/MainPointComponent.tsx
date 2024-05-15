import TextareaTemplate from "@/components/shared/TextareaTemplate"

const MainPointComponent = () => {
  return (
    <div className="w-full h-300">
      <TextareaTemplate title="題目要點一" tailwindClass="mb-10" />
      <TextareaTemplate title="題目要點二" tailwindClass="mb-10" />
      <TextareaTemplate title="題目要點三" tailwindClass="mb-10" />
    </div>
  )
}

export default MainPointComponent
