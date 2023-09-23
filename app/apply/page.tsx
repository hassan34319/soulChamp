import { client } from "../utils/client";
import { urlFor } from "../utils/urlFor";
import ApplyContent from "./(applyComponents)/ApplyContent";

type Props = {};
export const revalidate =60

async function Apply({}: Props) {
  const applyBackground = await client.fetch(`
  *[_type == "applyBackground"] {
    ...
  }
`);

  const backgroundImageUrl = urlFor(applyBackground[0].image).url(); // Replace 'jpg' with the actual file extension of your image.
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

export default Apply;
