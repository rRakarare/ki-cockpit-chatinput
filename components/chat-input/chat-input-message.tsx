import { Textarea } from "../ui/textarea";

function ChatInputMessage() {
  return (
    <Textarea
      placeholder="Was möchtest du wissen?"
      className="resize-none min-h-8 max-h-full px-1"
    />
  );
}

export default ChatInputMessage;
