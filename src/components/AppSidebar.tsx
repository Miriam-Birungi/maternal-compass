import {
  Home,
  Baby,
  CalendarDays,
  Apple,
  Moon,
  Dumbbell,
  Stethoscope,
  MessageCircle,
  Settings,
  Heart,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "My Pregnancy Journey", url: "/journey", icon: Baby },
  { title: "Appointments", url: "/appointments", icon: CalendarDays },
  { title: "Nutrition & Diet", url: "/nutrition", icon: Apple },
  { title: "Sleep & Wellness", url: "/sleep", icon: Moon },
  { title: "Exercise", url: "/exercise", icon: Dumbbell },
  { title: "Symptoms Checker", url: "/symptoms", icon: Stethoscope },
  { title: "Ask Assistant", url: "/assistant", icon: MessageCircle },
  { title: "Settings", url: "/settings", icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-r border-border">
      <SidebarHeader className="p-5">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shrink-0">
            <Heart className="w-5 h-5 text-primary-foreground" />
          </div>
          {!collapsed && (
            <span className="font-display font-semibold text-lg text-foreground">
              MamaCare
            </span>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="px-3">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const active = location.pathname === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url}
                        end
                        className={`rounded-xl px-3 py-2.5 transition-colors hover:bg-accent ${active ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground"}`}
                        activeClassName="bg-accent text-accent-foreground font-medium"
                      >
                        <item.icon className="mr-3 h-[18px] w-[18px] shrink-0" />
                        {!collapsed && <span className="text-sm">{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
