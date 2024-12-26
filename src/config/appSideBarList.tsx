import { Users, ShoppingCart, FileSliders, LayoutDashboard, Tags, Settings } from "lucide-react"

const menuList = [
    {
      title: "Dashboard",
      url: "dashboard",
      icon: LayoutDashboard,
      roles: ['admin'], // Accessible only by Admin
    },
    {
      title: "Contacts",
      url: "#",
      icon: Users,
      roles: ['user', 'admin'], // Accessible by both
    },
    {
      title: "Products",
      url: "#",
      icon: ShoppingCart,
      roles: ['admin'], // Accessible by both
    },
    {
      title: "Sale",
      url: "#",
      icon: Tags,
      roles: ['user', 'admin'], // Accessible by both
    },
    {
        title: "Reports",
        url: "#",
        icon: FileSliders,
        roles: ['user', 'admin'], // Accessible by both
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings,
      roles: ['admin'], // Accessible by both
    },
]

const menuListByRole = (role: string) =>{
   return menuList.filter((menu) => menu.roles.includes(role));
}


export {
    menuList,
    menuListByRole
}