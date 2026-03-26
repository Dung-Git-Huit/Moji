import LogOut from "@/components/auth/logout";
import api from "@/lib/axios";
import { useAuthStore } from "@/stores/useAuthStore";
import { Button } from "../components/ui/button";
import { toast } from "sonner";

const ChatAppPage = () => {
  const user = useAuthStore((s) => s.user);

  const handleOnClick = async () => {
    try {
      await api.get("/users/test", { withCredentials: true });
      toast.success("ok");
    } catch (error) {
      toast.error("Thất bại");
      console.log(error);
    }
  };
  return (
    <div>
      {user?.username}
      <LogOut />

      <Button onClick={handleOnClick}>test</Button>
    </div>
  );
};

export default ChatAppPage;
