import { MessageCircle } from 'lucide-react';

interface ChatButtonProps {
  href?: string;
}

export function ChatButton({ href = '#contact' }: ChatButtonProps) {
  return (
    <a className="chat" href={href} aria-label="Contact">
      <MessageCircle />
    </a>
  );
}
