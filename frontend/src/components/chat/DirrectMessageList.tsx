import { useChatStore } from "@/stores/useChatStore";
import DirrectMessageCard from "./DirrectMessageCard";

function DirrectMessageList() {
  const { conversations } = useChatStore();

  if (!conversations) return;

  const dirrectMessages = conversations.filter(
    (convo) => convo.type === "dirrect",
  );

  return (
    <div className="flex-1 overflow-y-auto p-2 space-y-2">
      {dirrectMessages.map((convo) => (
        <DirrectMessageCard convo={convo} />
      ))}
    </div>
  );
}

export default DirrectMessageList;
