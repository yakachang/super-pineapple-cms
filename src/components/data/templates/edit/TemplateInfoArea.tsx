import { TabView, TabPanel } from "primereact/tabview"

import MainPointComponent from "./MainPointComponent"
import TemplateContent from "./TemplateContent"

const TemplateInfoArea = () => {
  return (
    <div className="card">
      <TabView>
        <TabPanel header="題庫內容">
          <TemplateContent />
        </TabPanel>
        <TabPanel header="題目要點">
          <p className="m-0">
            <MainPointComponent />
          </p>
        </TabPanel>
      </TabView>
    </div>
  )
}

export default TemplateInfoArea
