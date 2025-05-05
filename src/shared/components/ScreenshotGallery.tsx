import Row from "@/shared/core/Row";
import Column from "@/shared/core/Column";

const ScreenshotGallery = ({ imageList }: { imageList: string[] }) => {
  return (
    <Column classNames="w-full mt-6">
      <Row classNames="w-full gap-4 overflow-y-hidden overflow-x-auto no-scrollbar items-center pb-4">
        {imageList.map((img, index) => (
          <div
            key={`screenshot-${index}`}
            className="relative min-w-[8rem] lg:min-w-[10rem] max-w-[8rem] lg:max-w-[10rem] aspect-[9/16] border border-gray-200 rounded-xl overflow-hidden drop_in hover:border-gray-300 transition-colors"
          >
            <div className="absolute inset-0 bg-gray-50">
              <img
                src={img}
                alt={`screenshot-${index}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </Row>
    </Column>
  );
};

export default ScreenshotGallery; 