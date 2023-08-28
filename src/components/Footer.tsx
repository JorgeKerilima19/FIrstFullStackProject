export const Footer = () => {
  return (
    <footer className="absolute w-full bottom-0 pb-10">
      <div className="absolute transform translate-y-[-40px] translate-x-[50%] bg-green-700 w-6/12">
        NewsLetter
      </div>
      <div className="flex flex-col px-7 gap-4">
        <div className="flex justify-between ">
          <h2>Company Name</h2>
          <div>Social Media</div>
        </div>
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg">Header</h3>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg">Header</h3>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg">Header</h3>
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
