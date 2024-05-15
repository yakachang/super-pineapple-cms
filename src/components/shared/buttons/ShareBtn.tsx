import { Button, ButtonProps } from "primereact/button"

export default function ShareBtn(props: ButtonProps) {
  return (
    <Button
      icon="pi pi-share-alt"
      size="large"
      className="rounded-2xl"
      {...props}
    />
  )
}
