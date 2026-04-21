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
  Plus,
} from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarGroupLabel,
  useSidebar,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const { state } = useSidebar();
  const collapsed = state === "collapsed";
  const location = useLocation();
  const { user: supabaseUser } = useAuth();
  const demoUser = JSON.parse(localStorage.getItem("mamacare_demo_user") || "null");
  const user = supabaseUser || demoUser;

  // Fetch actual chat history from localStorage
  const chats = JSON.parse(localStorage.getItem("mamacare_demo_chats") || "[]");

  const itemClass = (active: boolean) =>
    `rounded-xl px-3 py-2.5 transition-colors hover:bg-accent ${
      active ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground"
    }`;

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
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <NavLink
                    to="/"
                    end
                    className={itemClass(location.pathname === "/")}
                    activeClassName="bg-accent text-accent-foreground font-medium"
                  >
                    <Home className="mr-3 h-[18px] w-[18px] shrink-0" />
                    {!collapsed && <span className="text-sm">Home</span>}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {user ? (
                <>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild>
                      <button className={itemClass(false)}> {/* Changed to button to avoid acting as another Home link */}
                        <Plus className="mr-3 h-[18px] w-[18px] shrink-0" />
                        {!collapsed && <span className="text-sm">New Chat</span>}
                      </button>
                    </SidebarMenuButton>
                  </SidebarMenuItem>

                  {chats.length > 0 && !collapsed && (
                    <SidebarGroup className="mt-4 px-0">
                      <SidebarGroupLabel className="px-3 text-[10px] uppercase tracking-wider font-bold text-muted-foreground">
                        Recent Chats
                      </SidebarGroupLabel>
                      <SidebarMenu>
                        {chats.map((chat: any) => (
                          <SidebarMenuItem key={chat.id}>
                            <SidebarMenuButton asChild>
                              <NavLink
                                to={`/chat/${chat.id}`}
                                className={itemClass(location.pathname === `/chat/${chat.id}`)}
                              >
                                <MessageCircle className="mr-3 h-[18px] w-[18px] shrink-0" />
                                <span className="text-sm truncate">{chat.title}</span>
                              </NavLink>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        ))}
                      </SidebarMenu>
                    </SidebarGroup>
                  )}
                </>
              ) : (
                <>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      disabled
                      className={`${itemClass(false)} opacity-50 cursor-not-allowed`}
                    >
                      <Plus className="mr-3 h-[18px] w-[18px] shrink-0" />
                      {!collapsed && <span className="text-sm">New Chat</span>}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-3 pb-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <NavLink
                to="/settings"
                end
                className={itemClass(location.pathname === "/settings")}
                activeClassName="bg-accent text-accent-foreground font-medium"
              >
                <Settings className="mr-3 h-[18px] w-[18px] shrink-0" />
                {!collapsed && <span className="text-sm">Settings</span>}
              </NavLink>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
