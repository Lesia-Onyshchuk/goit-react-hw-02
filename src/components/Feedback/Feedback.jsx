export default function Feedback({
  feedback,
  positiveFeedback,
  totalFeedback,
}) {
  //   const { feedback, setFeedback } = useState({
  //     good: 0,
  //     neutral: 0,
  //     bad: 0,
  //   });

  //   const handleFeedback = (option) => {
  //     setFeedback((prev) => ({ ...prev, [option]: prev[option] + 1 }));
  //   };

  //   const values = Object.values(feedback);
  //   const total = values.reduce((acc, currentValue) => acc + currentValue, 0);

  //   const positiveFeedback = Math.round((feedback.goods / totalFeedback) * 100);

  return (
    <>
      <ul>
        <li>Good: {feedback.good}</li>
        <li>Neutral: {feedback.neutral}</li>
        <li>Bad: {feedback.bad}</li>
      </ul>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </>
  );
}
