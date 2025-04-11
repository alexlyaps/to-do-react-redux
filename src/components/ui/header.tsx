// import * as React from "react";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useTheme } from "@/components/theme-provider";
import {
  NavigationMenu,
  NavigationMenuContent,
  // NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  // NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export function Header() {
  interface MenuItem {
    label: string;
    link: string;
  }

  const menuList: MenuItem[] = [
    { label: "About", link: "#about" },
    { label: "CV", link: "#cv" },
    { label: "Projects", link: "#projects" },
    { label: "Showcase", link: "#showcase" },
    { label: "Contacts", link: "#contacts" },
  ];

  const { theme } = useTheme();

  return (
    <>
      <div
        className={`fixed top-0 left-0 flex flex-row justify-around items-center h-[65px] border-b  z-10 w-full backdrop-blur-sm ${
          theme === "dark"
            ? "bg-gray-800 border-gray-700"
            : "bg-gray-100 border-gray-200"
        }`}
      >
        <NavigationMenu>
          <NavigationMenuList>
            {menuList.map((item) => {
              return (
                <NavigationMenuItem>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <NavigationMenuLink>{item.link}</NavigationMenuLink>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <ModeToggle />
      </div>
    </>
  );
}
