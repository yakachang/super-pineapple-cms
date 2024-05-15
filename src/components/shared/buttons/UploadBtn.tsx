import { Button, ButtonProps } from "primereact/button"

export default function UploadBtn(props: ButtonProps) {
  return (
    <Button
      icon="pi pi-upload"
      size="large"
      className="rounded-2xl"
      {...props}
    />
  )
}
