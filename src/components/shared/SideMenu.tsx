"use client"

import { ComponentProps } from "react"

import { useRouter } from "next/navigation"

import { MenuItem } from "primereact/menuitem"
import { PanelMenu } from "primereact/panelmenu"

const MENU_ITEMS: ComponentProps<typeof PanelMenu>["model"] = [
  {
    label: "會員帳號管理",
    expanded: true,
    items: [
      {
        label: "教師",
        url: "/account/teachers",
      },
      {
        label: "學生",
        url: "/account/students",
      },
      {
        label: "管理人員",
        url: "/account/admins",
      },
      {
        label: "群組權限",
        url: "/account/permissions",
      },
    ],
  },
  {
    label: "資料管理",
    expanded: true,
    items: [
      {
        label: "題庫",
        url: "/data/templates",
      },
      {
        label: "班級",
        url: "/data/classrooms",
      },
      {
        label: "試題",
        url: "/data/exams",
      },
      {
        label: "作文",
        url: "/data/articles",
      },
    ],
  },
  {
    label: "後台設定",
    expanded: true,
    items: [
      {
        label: "推播訊息",
        url: "/settings/push-notifications",
      },
      {
        label: "系統公告",
        url: "/settings/announcements",
      },
      {
        label: "訂閱設定",
        url: "/settings/subscriptions",
      },
    ],
  },
  {
    label: "平台數據",
    items: [
      {
        label: "數據儀表板",
        url: "/statistics/dashboard",
      },
      {
        label: "功能滿意度回饋",
        url: "/statistics/feedbacks",
      },
    ],
  },
]

const useMenuItems = () => {
  const router = useRouter()

  const injectCommand = (item: MenuItem): MenuItem => {
    if (item.items) {
      return {
        ...item,
        items: item.items.map(injectCommand),
      }
    }

    const url = item.url

    if (!url) return item

    return {
      ...item,
      url: undefined,
      command: () => {
        router.push(url)
      },
    }
  }

  return MENU_ITEMS.map(injectCommand)
}

type Props = Readonly<{ className?: string }>

export const SideMenu = (props: Props) => {
  const items = useMenuItems()
  return <PanelMenu {...props} model={items} multiple />
}
