export default function Gallery() {
  return (
    <div className="max-w-xl lg:pl-0 pr-6 grid gap-3">
      <div className="max-w-96 flex justify-center gap-3 mx-auto">
        <ImageH
          src={
            "https://i.pinimg.com/564x/ad/78/9d/ad789d630dc597fd0a9ffcc9ca16285c.jpg"
          }
          position="absolute bottom-0"
        />
        <ImageV
          src={
            "https://i.pinimg.com/564x/c1/30/ec/c130ecbf5500cde4f85c713df0678f41.jpg"
          }
        />
      </div>
      <div className="flex gap-3">
        <ImageH src={"MenuItem.png"} />
        <ImageV
          src={
            "https://i.pinimg.com/564x/9b/39/eb/9b39eb3646a5a9df5a8c797de52a36f4.jpg"
          }
        />
        <ImageH
          src={
            "https://www.asiagaa.com/wp-content/uploads/2021/04/evangeline-shaw-VLkoOabAxqw-unsplash.jpg"
          }
        />
      </div>
    </div>
  );
}

interface imageProps {
  position?: string;
  src: string;
}

function ImageH({ position, src }: imageProps) {
  return (
    <div className="relative w-1/2">
      <img
        id="horizontal"
        className={`h-auto max-w-full object-cover object-center ${position}`}
        src={src}
        alt="gallery-photo-horizontal"
      />
    </div>
  );
}
function ImageV({ src }: imageProps) {
  return (
    <div className="relative w-2/6">
      <img
        id="vertical"
        className="h-auto max-w-full object-cover object-center"
        src={src}
        alt="gallery-photo-vertical"
      />
    </div>
  );
}
