import { useState } from "react"

import { FileUpload } from "primereact/fileupload"
import { Tooltip } from "primereact/tooltip"

interface FileObject {
  name: string
  size: number
  type: string
}

const FileUploadComponent = () => {
  const [uploadedFiles, setUploadedFiles] = useState<FileObject[]>([])

  const chooseOptions = {
    icon: "pi pi-fw pi-images",
    iconOnly: true,
    className: "custom-choose-btn p-button-rounded p-button-outlined",
  }
  const uploadOptions = {
    icon: "pi pi-fw pi-cloud-upload",
    iconOnly: true,
    className:
      "custom-upload-btn p-button-success p-button-rounded p-button-outlined",
  }
  const cancelOptions = {
    icon: "pi pi-fw pi-times",
    iconOnly: true,
    className:
      "custom-cancel-btn p-button-danger p-button-rounded p-button-outlined",
  }

  const onUpload = (e: { files: FileObject[] }) => {
    if (e.files.length > 3) {
      alert("You can upload at most 3 images")
      return
    }

    setUploadedFiles(e.files)

    e.files.forEach(file => console.log(file.name))
  }

  const onRemove = (e: { file: FileObject }) => {
    setUploadedFiles(prevFiles =>
      prevFiles.filter(file => file.name !== e.file.name),
    )
  }

  return (
    <div>
      <label className="relative">題目圖片</label>
      <FileUpload
        customUpload
        multiple
        accept="image/*"
        maxFileSize={1000000}
        uploadHandler={onUpload}
        onRemove={onRemove}
        chooseOptions={chooseOptions}
        uploadOptions={uploadOptions}
        cancelOptions={cancelOptions}
      />
      <Tooltip target=".custom-choose-btn" content="Choose" position="top" />
      <Tooltip target=".custom-upload-btn" content="Upload" position="top" />
      <Tooltip target=".custom-cancel-btn" content="Clear" position="top" />
    </div>
  )
}

export default FileUploadComponent
