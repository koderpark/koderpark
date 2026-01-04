import Section from "../components/section";

export default function About() {
  return (
    <Section id="about" className="py-16 px-4">
      <h2 className="text-3xl font-bold mb-4">About</h2>
      <p className="text-gray-700">여기에는 무슨 내용이 들어가야 할까요?</p>
      <div className="flex items-center space-x-3 mt-6 p-4 rounded-lg bg-yellow-200">
        <span className="inline-block px-3 py-1 text-yellow-800 text-xs font-semibold rounded-full">
          🚧
        </span>
        <span className="text-base text-gray-900 font-medium">
          Under construction, 대부분의 버튼이나 페이지 내용물이 변경될 수
          있습니다.
        </span>
      </div>
    </Section>
  );
}

