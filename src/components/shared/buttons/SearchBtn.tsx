import { Button, ButtonProps } from "primereact/button"

export default function SearchBtn(props: ButtonProps) {
  return (
    <Button
      icon="pi pi-search"
      size="large"
      className="rounded-2xl"
      {...props}
    />
  )
}
