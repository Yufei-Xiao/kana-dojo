interface GameProgressIndicatorProps {
  currentQuestion: number;
  totalQuestions?: number;
}

export default function GameProgressIndicator({
  currentQuestion,
  totalQuestions,
}: GameProgressIndicatorProps) {
  return (
    <div
      className='flex items-center gap-2 text-lg font-semibold text-(--muted-color) sm:text-xl'
      aria-label={
        totalQuestions
          ? `Question ${currentQuestion} of ${totalQuestions}`
          : `Question ${currentQuestion}`
      }
    >
      <span>
        {totalQuestions
          ? `${currentQuestion} / ${totalQuestions}`
          : `Question ${currentQuestion}`}
      </span>
    </div>
  );
}
