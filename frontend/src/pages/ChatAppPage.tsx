import LogOut from "@/components/auth/logout";
import { useAuthStore } from "@/stores/useAuthStore";

const ChatAppPage = () => {
  const user = useAuthStore((s) => s.user);
  return (
    <div>
      {user?.username}
      <LogOut />
    </div>
  );
};

export default ChatAppPage;
