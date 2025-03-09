export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center mb-5" style={{ height: 'calc(96vh - 64px)' }}>
        <div className="text-center">
          <h1 className="text-3xl m-5">Joshua Webb</h1>
          <p>I break stuff</p>
          <br />
          <div className="flex flex-row gap-x-4 justify-center">
            <p className="text-lg p-2 bg-gray-800 rounded transform duration-200 hover:translate-y-[-5px]">Software Engineer</p>
            <p className="text-lg p-2 bg-gray-800 rounded transform duration-200 hover:bg-gray-700 hover:translate-y-[-5px]">Security</p>
            <p className="text-lg p-2 bg-gray-800 rounded transform duration-200 hover:bg-gray-700 hover:translate-y-[-5px]">Web Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
