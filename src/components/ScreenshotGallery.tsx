import Row from "./core/Row";
import Column from "./core/Column";

const ScreenshotGallery = ({ imageList }: { imageList: string[] }) => {
  return (
    <Column classNames="w-full mt-4">
      <Row classNames="w-full gap-4 overflow-y-hidden overflow-x-auto no-scrollbar items-center">
        {imageList.map((img, index) => (
          <div
            key={`screenshot-${index}`}
            className="relative min-w-[10rem] lg:min-w-[12rem] max-w-[10rem] lg:max-w-[12rem] aspect-[9/16] border border-gray-200 rounded-xl overflow-hidden drop_in"
          >
            <img
              src={img}
              alt={`screenshot-${index}`}
              className="w-full h-full object-contain py-4 px-2"
            />
          </div>
        ))}
      </Row>
    </Column>
  );
};

export default ScreenshotGallery; 