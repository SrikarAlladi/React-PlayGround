export interface Comment {
  id: number;
  votes: number;
  content: string;
  timestamp: string;
  replies: Comment[];
}

export interface NestedCommentProps {
  comments: Comment[];
  onSubmit?: (content: string) => void;
  onEdit?: (content: string) => void;
  onDelete?: (content: string) => void;
  onUpvote?: (content: string) => void;
  onDownvote?: (content: string) => void;
}
