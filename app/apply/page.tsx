import ApplyContent from "./(applyComponents)/ApplyContent";

type Props = {};

function Forgot({}: Props) {
  const backgroundImageUrl = "/signIn.png"; // Replace 'jpg' with the actual file extension of your image.

  return (
    <main
      className="bg-cover bg-top min-h-[100vh] flex items-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="bg-black bg-opacity-40 z-30 min-h-[100vh] w-full flex flex-col  items-center backdrop-blur-lg">
        <ApplyContent />
      </div>
    </main>
  );
}

export default Forgot;
