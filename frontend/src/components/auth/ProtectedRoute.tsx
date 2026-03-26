import { useAuthStore } from "@/stores/useAuthStore";
import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";

function ProtectedRoute() {
  const { accessToken, user, loading, refresh, fetchMe } = useAuthStore();
  const [starting, setStarting] = useState(true);

  const init = async () => {
    //có thể xảy ra khi refresh trang
    try {
      // Chỉ refresh nếu thực sự không có accessToken
      if (!accessToken) {
        await refresh();
      }

      const currentToken = useAuthStore.getState().accessToken;
      if (currentToken && !user) {
        await fetchMe();
      }
    } catch (error) {
      console.error("Auth initialization failed", error);
    } finally {
      setStarting(false);
    }
  };

  useEffect(() => {
    init();
  }, []);

  if (starting || loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Đang tải trang...
      </div>
    );
  }

  if (!accessToken) {
    return <Navigate to="/signin" replace />;
  }
  return <Outlet></Outlet>;
}

export default ProtectedRoute;
