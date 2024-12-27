import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { SidebarTrigger } from "@/components/ui/sidebar";
  
  export function AppBar() {
    return (
        <div className="w-full h-10 bg-gray-800 text-gray-100 flex items-center px-2">
            <SidebarTrigger/>
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger >File</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem >
                        New Tab <MenubarShortcut>⌘T</MenubarShortcut>
                        </MenubarItem>
                        <MenubarItem>New Window</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Share</MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>Print</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
        </div>
    )
  }

