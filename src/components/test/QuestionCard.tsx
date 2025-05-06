import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type QuestionCardProps = {
  questionKey?: string; // 필요하다면 내부 디버깅용으로 유지
  onClick: () => void;
  cardTitle: string;
  cardContent: string;
};

function QuestionCard({ onClick, cardTitle, cardContent }: QuestionCardProps) {
  return (
    <Card
      onClick={onClick}
      className="min-h-80 w-full bg-[#896aff] hover:bg-[#6d45fc] hover:shadow-md shadow-[#6d45fc] text-white dark:text-[#eee]/70 border-0 first:hover:text-[#00e5f9] last:hover:text-[#fffa1b] transition-all duration-300 ease-in-out group cursor-pointer"
    >
      <CardHeader>
        <CardTitle className="text-lg sm:text-xl ">{cardTitle}</CardTitle>
      </CardHeader>
      <CardContent className="mt-14 text-2xl sm:text-3xl font-bold group-hover:mt-12 transition-all duration-300 ease-in-out text-left max-w-md mx-auto break-keep">
        <h2>{cardContent}</h2>
        {/* 디버깅용 표시 */}
        {/* <small className="text-xs text-gray-300">key: {questionKey}</small> */}
      </CardContent>
    </Card>
  );
}

export default QuestionCard;
