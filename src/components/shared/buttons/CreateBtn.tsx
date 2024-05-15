import { Button, ButtonProps } from "primereact/button"

export default function CreateBtn(props: ButtonProps) {
  return (
    <Button icon="pi pi-plus" size="large" className="rounded-2xl" {...props} />
  )
}
