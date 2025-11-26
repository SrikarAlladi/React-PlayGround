export interface PollDataProps {
  id: string;
  title: string;
  totalVotes: number;
  isMultiple: boolean;
  options: Option[];
}

export interface Option {
  id: string;
  title: string;
  votes: number;
}

export interface PollWidgetProps {
  pollId: string;
  title: string;
  options: Option[];
  isMultiple: boolean;
  onVote?: Function;
  onVoteRemove?: Function;
}

export interface pollContextType {
  pollData: PollDataProps | null;
  setData: React.Dispatch<React.SetStateAction<PollDataProps>> | null;
}
