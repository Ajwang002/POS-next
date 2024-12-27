import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"

import {menuList} from '@/config/appSideBarList'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


  
export function AppSidebar() {
    const profileAvatar = '/images/developerAvatar.webp'

    return (
      <Sidebar collapsible="icon">
        <SidebarContent className="bg-gray-800  text-gray-100">
          <SidebarGroup>
            {/* Profile section */}
            <SidebarGroupLabel className="text-gray-100">
              <div className="flex items-center gap-5">
                <Avatar>
                  <AvatarImage src={profileAvatar} />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>

                <div className="flex flex-col items-start">
                  <span className="text-sm">Ajithkumar</span>
                  <span>ajith123@gmail.com</span>
                </div>
              </div>
            </SidebarGroupLabel>
            {/* divider section */}
            <div className="border-b my-3"></div>
            {/* content section */}
            <SidebarGroupContent>
              <SidebarMenu>
                {menuList.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    )
  }
  